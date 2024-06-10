'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import "../globals.css"
import { useState } from "react";

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

        // try {
        //     const response = await fetch("http://localhost:3000/", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
        //     });
        
        //     if (!response.ok) {
        //         // Handle specific HTTP status codes if needed
        //         if (response.status === 400) {
        //             throw new Error('Bad request - check your data');
        //         } else if (response.status === 401) {
        //             throw new Error('Unauthorized - check your credentials');
        //         } else {
        //             throw new Error('Server error - please try again later');
        //         }
        //     }
        
        //     const data = await response.json();
        //     console.log('Form submitted successfully:', data);
        //     alert('Success');
        //     // Reset form after successful submission
        //     setFormData({
        //         username: '',
        //         password: '',
        //     });
        // } catch (error: any) {
        //     console.error('Error submitting form:', error.message);
        //     alert(error.message);
        // }
        // console.log('Form Data:', formData)
    }
    
    return (
        <div className="text-center text-3xl columns-2 my-36 mx-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-800">
            <div className="login">
                <h1 className="drop-shadow-[0_6px_6px_rgba(10,10,10,10)] text-center text-6xl text-amber-600 font-semibold py-40 italic">Lepolankeng</h1>
            </div>
            <div className="py-10 pl-5 pr-10 -my-5">
                <form method="post" onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-semibold pb-5">Login</h1>
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} className="p-5 m-2 bg-amber-500 text-black rounded-xl border-2 border-dotted border-black"/><br/>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} className="p-5 m-2 bg-amber-500 text-black rounded-xl border-2 border-dotted border-black"/><br/>
                    <input type="submit" value="Submit" className="bg-slate-600 hover:bg-red-300 p-2 rounded-xl"/>
                </form>
            </div>
        </div>
    );
}