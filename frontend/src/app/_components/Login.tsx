'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css"
import { useState } from "react";
import users from "./users";

export default function Login(){

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const router = useRouter();
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        router.push('/cashier')

        try {
            const response = await fetch("http://localhost:3000/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        
            if (!response.ok) {
                // Handle specific HTTP status codes if needed
                if (response.status === 400) {
                    throw new Error('Bad request - check your data');
                } else if (response.status === 401) {
                    throw new Error('Unauthorized - check your credentials');
                } else {
                    throw new Error('Server error - please try again later');
                }
            }
        
            const data = await response.json();
            console.log('Form submitted successfully:', data);
            alert('Success');
            // Reset form after successful submission
            setFormData({
                username: '',
                password: '',
            });
        } catch (error: any) {
            console.error('Error submitting form:', error.message);
            alert(error.message);
        }
        console.log('Form Data:', formData)
    }
    
    return (
        <div className="grid grid-cols-2 gap-x-0 place-content-evenly h-screen text-center px-32 ">
            <div className="login py-40">
                <h1 className="drop-shadow-[0_6px_6px_rgba(10,10,10,10)] text-center text-6xl text-amber-600 font-semibold italic">Lepolankeng</h1>
                <h3 className="text-4xl text-amber-200 italic font-semibold">Snack Bar</h3>
            </div>
            <div className="border-2 border-transparent bg-gradient-to-r from-slate-400 to-slate-900 py-10 px-5">
                <form method="post" onSubmit={handleSubmit} className="grid grid-rows-2 gap-0">
                    <h1 className="text-3xl font-semibold pb-5">Login</h1>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} className="mx-10 text-3xl text-white font-semibold bg-gradient-to-l from-slate-500 via-slate-600 to-slate-900 border-2 border-transparent rounded-xl py-3 px-2" required/><br/>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="mx-10 text-3xl text-white font-semibold bg-gradient-to-l from-slate-500 via-slate-600 to-slate-900 border-2 border-transparent rounded-xl py-3 px-2" required/><br/>
                    <input type="submit" value="Submit" className="text-3xl border-2 border-dotted border-white rounded-lg py-2 mx-20 text-center hover:bg-slate-300 hover:text-green-500 hover:font-semibold hover:border-amber-500"/><br/>
                    <Link href="/change" className="text-xl text-blue-400 underline hover:text-2xl hover:text-white">Forgot Password</Link>
                </form>
            </div>
        </div>
    );
}