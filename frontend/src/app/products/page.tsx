'use client'

import { useRouter } from "next/navigation";
import Card from "../_components/card";

export default function Cashier(){
    
    const router = useRouter();

    const handleClick = () => {
        router.push('/cashier')
    }
    
    return (
        <div className="">
            <div className="">
                <h1 className="p-2 text-center font-semibold text-3xl">Products Page</h1>
            </div>
            <div>
                <Card />
            </div>
        </div>
    );
}