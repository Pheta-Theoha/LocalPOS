'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "../_components/card";

export default function Cashier(){

    const router = useRouter();

    const handleClick = () => {
        router.push('/products');
    }

    return (
        <div className="">
            <div className="grid grid-cols-3 gap-5 px-5 py-2">
                <div className="p-2 text-center text-3xl font-semibold">
                    <Link href="/admin" className="border-2 border-dotted border-red-900 px-10 py-1 bg-red-800 rounded-md">ADMIN</Link>
                </div>
                <div className="">
                    <h1 className="p-2 text-center text-3xl font-bold">Transaction Register</h1>
                </div>
                <div className="p-2 text-center text-3xl font-semibold">
                    <button onClick={handleClick} className="border-2 border-dotted border-green-900 px-10 py-1 bg-green-800 rounded-md">SAVE/PRINT</button>
                </div>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
}