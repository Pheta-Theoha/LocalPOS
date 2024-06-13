'use client'

import { useRouter } from "next/navigation";
import Card from "../_components/cash";
import Link from "next/link";
import { Product } from "../_components/registerProduct";

export default function Cashier(){
    
    const router = useRouter();

    const handleClick = () => {
        router.push('/cashier')
    }
    
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-5 px-5 py-2">
                <div className="p-2 text-center text-3xl font-semibold">
                    <Link href="/cashier" className="border-2 border-dotted border-blue-900 px-10 py-1 bg-blue-400 rounded-md hover:bg-blue-300 hover:text-blue-900">Home</Link>
                </div>
                <div className="">
                    <h1 className="p-2 text-center text-3xl font-bold">Products Page</h1>
                </div>
                <div className="p-2 text-center text-3xl font-semibold">
                    <button onClick={handleClick} className="border-2 border-dotted border-green-900 px-10 py-1 bg-green-800 rounded-md hover:bg-green-400 hover:text-green-900">SAVE/PRINT</button>
                </div>
            </div>
            <div>
                <Product />
            </div>
        </div>
    );
}