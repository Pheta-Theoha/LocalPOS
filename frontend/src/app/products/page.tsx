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
                <div className="dropdown p-2 font-semibold px-10 py-1">
                    <button className="category border-2 border-dotted border-amber-900 text-3xl px-10 py-1 rounded-md hover:bg-amber-400 hover:text-green-900">Category</button>
                    <div className="dropdown-content rounded-lg text-center ml-5 border-2 border-dotted border-black">
                        <a href="#" className="text-xl p-3">Fast Food</a>
                        <a href="#" className="text-xl p-3">Liquor</a>
                        <a href="#" className="text-xl p-3">Stock</a>
                    </div>
                </div>
                {/* <div className="p-2 text-center text-3xl font-semibold">
                <select name="Category" id="category" className="border-2 border-dotted border-amber-900 px-10 py-1 bg-amber-800 rounded-md hover:bg-amber-400 hover:text-green-900">
                    <option value="stock" className="text-xl bg-amber-600 py-4 text-center hover:bg-amber-300">Stock</option>
                    <option value="liquor" className="text-xl bg-amber-600 py-4 text-center hover:bg-amber-300">Liquor</option>
                </select>
                </div> */}
            </div>
            <div>
                <Product />
            </div>
        </div>
    );
}