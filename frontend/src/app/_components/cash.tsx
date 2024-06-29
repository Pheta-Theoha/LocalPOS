import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Cash() {

    const router = useRouter();

    const handleClick = async (e: any) => {
        e.preventDefault();
        router.push('/');
    }

    const handleClick2 = async (e: any) => {
        e.preventDefault();
        router.push('/products');
    }

    return (
        <div className="drop-shadow-[0_6px_6px_rgba(0.5,0.5,0.5,0.5)] border-slate-500 border-2 rounded-md m-5 p-5 bg-slate-600 grid grid-cols-2">
            <div className="border-slate-500 border-2 rounded-lg">
                <div className="text-center">
                    <Link href="/transactions" className="text-xl font-semibold hover:text-3xl hover:text-blue-400">Transaction Info</Link>
                </div>
                <div className="grid grid-rows-2 h-fit">
                    <div className="grid grid-cols-2">
                        <div className="m-5 grid grid-rows-7 gap-3 text-xl">
                            <h3>Date:</h3>
                            <h3>Item(s):</h3>
                            <h3>Cost:</h3>
                            <h3>In stock:</h3>
                            <h3>Total:</h3>
                            <h3>Amount Paid:</h3>
                            <h3>Change:</h3>
                        </div>
                        <div className="m-5">
                            <form action="#" className="grid grid-rows-7">
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                                <input type="text" className="my-2 rounded-md bg-slate-500 text-2xl px-2 w-full"/>
                            </form>
                        </div>
                    </div>
                    <div className="m-5 border-2 border-slate-500 rounded-lg text-xl h-fill bg-slate-400 text-center">
                        <h1 className="text-center font-semibold">Cash Register</h1>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="border-2 border-black rounded-lg p-5 mx-5 my-12 text-3xl font-bold text-center bg-slate-500">Total:</div>
                            <div className="border-2 border-black rounded-lg p-5 mx-5 my-12 text-3xl font-bold text-center bg-slate-500">
                                <h1>M0</h1>
                            </div>
                        </div>
                        <button className="text-center text-3xl font-semibold border-2 border-dotted border-black rounded-2xl px-10 py-2 bg-green-400 hover:bg-green-200">Submit</button>
                    </div>
                    <div className="grid grid-cols-2 pb-2">
                        <button className="text-2xl text-center border-2 border-black rounded-lg mx-5 bg-white font-semibold hover:bg-blue-300 hover:text-3xl hover:text-blue-600">Reset</button>
                        <Link href="/" className="text-2xl text-center border-2 border-black rounded-lg mx-5 bg-red-700 font-bold hover:bg-red-500 hover:text-3xl hover:text-red-200">Logout</Link>
                    </div>
                </div>
            </div>
            <div className="mx-2 grid grid-rows-2 gap-2">
                <div className=" border-slate-500 border-2 rounded-lg bg-gray-500">
                    <div className="text-center">
                        <Link href="/products" className="text-xl font-semibold hover:text-3xl hover:text-blue-400">Product Info</Link>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="m-5 grid grid-rows-6 gap-5 text-xl">
                            <h3>Item(s):</h3>
                            <h3>Cost:</h3>
                            <h3>In stock:</h3>
                            <h3>Total:</h3>
                            <h3>Amount Paid:</h3>
                            <h3>Change:</h3>
                        </div>
                        <div className="m-5 grid grid-rows-6 text-xl">
                            <input type="text" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full" autoFocus/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-l from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                        </div>
                    </div>
                </div>
                <div className=" border-slate-500 border-2 rounded-lg bg-slate-400">
                    <div className="text-center">
                        <Link href="/users" className="text-xl font-semibold hover:text-3xl hover:text-blue-500">Cashier Info</Link>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="m-5 grid grid-rows-6 gap-5 text-xl">
                            <h3>Name:</h3>
                            <h3>Login Time:</h3>
                            <h3>In stock:</h3>
                            <h3>Total:</h3>
                            <h3>Amount Paid:</h3>
                            <h3>Change:</h3>
                        </div>
                        <div className="m-5 grid grid-rows-6 gap-1">
                            <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                            <input type="text" className="my-2 rounded-md bg-gradient-to-r from-slate-500 to-slate-400 text-2xl px-2 w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}