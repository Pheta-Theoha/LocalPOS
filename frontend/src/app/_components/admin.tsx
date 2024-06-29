// import { prisma } from '@lib/prisma';
import { useState, useEffect } from "react";

export default async function Admin() {

    const [users, SetUsers] = useState([]);
    // const [specUser, SetSpecUser] = useState(false);
    var clickedUser = "";

    const handleUser = (user: any) => {
        clickedUser = user.fullName;
    }

    
    useEffect(() => {
        const sample = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/auth', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    cache: "force-cache"
                });

        
                if(!response.ok){
                    throw new Error("Not Okay")
                }
            
                const data = await response.json();
                console.log("Fetched Users:", data);
                
                const users = data;
                SetUsers(users);
            }catch(e: any){
                console.log(e.message);
            }
        }
        sample();
    }, []);

    console.log(users)

    return (
        <div className="drop-shadow-[0_6px_6px_rgba(0.5,0.5,0.5,0.5)] border-slate-500 border-2 rounded-md m-5 p-3 bg-slate-500 grid grid-rows-3">
            <div className="row-span-2 grid grid-cols-3 gap-2">
                <div className="border-2 border-slate-400 rounded-md overflow-y-scroll">
                    <h1 className="sticky top-0 bg-slate-600 text-center justify-center text-3xl font-semibold">Products</h1>
                    <div className="">
                        <ul className="m-3 text-xl">
                            <li>Product 1</li>
                            <li>Product 2</li>
                            <li>Product 3</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>     
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                            <li>Product 4</li>
                        </ul>
                    </div>
                </div>            
                <div className="border-2 border-slate-400 rounded-md overflow-y-scroll">
                    <h1 className="sticky top-0 bg-slate-600 text-center justify-center text-3xl font-semibold">Transactions</h1>
                    <div className="">
                        <ul className="m-3 text-xl">
                            <li>Transaction 1</li>
                            <li>Transaction 2</li>
                            <li>Transaction 3</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>     
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                            <li>Transaction 4</li>
                        </ul>
                    </div>
                    
                </div>            
                <div className="border-2 border-slate-400 rounded-md overflow-y-scroll">
                    <h1 className="sticky top-0 bg-slate-600 text-center justify-center text-3xl font-semibold">Users</h1>
                    <div className="">
                        <ul className="m-3 text-xl">
                            {users.map((user, index: any) => (
                                <li key={index}><button onClick={handleUser(user)}>{user.fullName}</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-2 border-dotted border-slate-400 rounded-lg my-2 h-64">
                <h1 className="text-center text-3xl font-semibold italic">More Information</h1>
                <div className="grid grid-cols-3 gap-3">
                    <div className="m-2 border-2 border-double border-slate-400 rounded">
                        <h1 className="text-2xl text-center font-semibold">Product</h1>
                        <div className="grid grid-rows-4 p-3">
                            <h1 className="text-xl font-bold">Name:</h1>
                            <h1 className="text-xl font-bold">Price:</h1>
                            <h1 className="text-xl font-bold">Quantity:</h1>
                            <h1 className="text-xl font-bold">In Stock:</h1>
                        </div>
                    </div>
                    <div className="m-2 border-2 border-double border-slate-400 rounded">
                        <h1 className="text-2xl text-center font-semibold">Transaction</h1>
                        <div className="grid grid-rows-4 p-3">
                            <h1 className="text-xl font-bold">Date:</h1>
                            <h1 className="text-xl font-bold">Cashier:</h1>
                            <h1 className="text-xl font-bold">Items:</h1>
                            <h1 className="text-xl font-bold">Cash:</h1>
                        </div>
                    </div>
                    <div className="m-2 border-2 border-double border-slate-400 rounded">
                        <h1 className="text-2xl text-center font-semibold">User</h1>
                        <div className="grid grid-rows-4 p-3">
                            <div className="grid grid-cols-2">
                                <h1 className="text-xl font-bold">Username:</h1>
                                <h1 className="text-xl font-bold">{clickedUser}</h1>
                            </div>
                            <h1 className="text-xl font-bold">Full Name:</h1>
                            <h1 className="text-xl font-bold">Logged In:</h1>
                            <h1 className="text-xl font-bold">Logged out:</h1>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}