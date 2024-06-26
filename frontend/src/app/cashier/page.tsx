'use client'

import { useRouter } from "next/navigation";
import Cash from "../_components/cash";
import { useState } from "react";
import { Popup } from "../_components/popup";
import Model from "../_components/model";

export default function Cashier(){
    
    const [pop, setPop] = useState(false);

    const router = useRouter();

    const handleAdmin = () => {
        setPop(true)
        router.push('/admin');
    }

    const handleClick = () => {
        router.push('/products');
    }

    return (
        <div className="">
            {/* <Model /> */}
            <div className="grid grid-cols-3 gap-5 px-5 py-2">
                <div className="p-2 text-center text-3xl font-semibold">
                    <button onClick={handleAdmin} className="border-2 border-dotted border-red-900 px-10 py-1 bg-red-800 rounded-md hover:bg-red-500 hover:text-red-900">ADMIN</button>
                </div>
                <div className="">
                    <h1 className="p-2 text-center text-3xl font-bold">Transaction Register</h1>
                </div>
                <div className="p-2 text-center text-3xl font-semibold">
                    <button onClick={handleClick} className="border-2 border-dotted border-green-900 px-10 py-1 bg-green-800 rounded-md hover:bg-green-400 hover:text-green-900">Register Product</button>
                </div>
            </div>
            <div>
                {/* {
                    pop && <Popup/>
                } */}
                <Cash />
            </div>
        </div>
    );
}