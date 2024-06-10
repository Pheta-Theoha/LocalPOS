'use client'

import { useRouter } from "next/navigation";
import Card from "../_components/card";

export default function Cashier(){

    const router = useRouter();

    const handleClick = () => {
        router.push('/products');
    }

    return (
        <div className="">
            <div className="">
                <h1 className="p-2 text-center text-3xl font-bold">Transaction Register</h1>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
}