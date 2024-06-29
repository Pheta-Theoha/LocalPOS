import { Dropdown, MenuItem, Select } from "@nextui-org/react";
import "../globals.css"

export const Product = () => {

    const handlClick = () => {
        // 
    }

    return (
        <div className="border-2 border-slate-500 m-5 grid grid-rows-2">
            <div className="grid grid-cols-2">
                <div className="border-2 border-slate-400 m-3 rounded-lg p-2">
                    <h1 className="text-center text-3xl italic underline font-semibold">Register</h1>
                    <div className="border-2 border-dotted rounded-lg border-slate-400 p-2 m-2">
                            <div className="grid grid-cols-2 gap-1 p-2 text-xl font-semibold">
                                <div className="grid grid-rows-4 place-items-left">
                        {/* <form className="p-2 text-xl font-semibold"> */}
                                    <label className="mt-3">Code:</label>
                                    <label className="mt-3">Name:</label>
                                    <label className="mt-3">Price:</label>
                                    <label className="mt-3">Quantity:</label>
                                    <button className="text-2xl text-center border-2 border-black rounded-lg mr-12 bg-green-400 font-semibold hover:bg-blue-300 hover:text-3xl hover:text-blue-600">Save</button>
                                </div>
                                <div className="grid grid-rows-4 place-items-left">
                                    <input type="number" className="text-black font-semibold p-2 m-2 rounded-xl bg-slate-500 w-full" autoFocus/>
                                    <input type="text" className="text-black font-semibold p-2 m-2 rounded-xl bg-slate-500 w-full"/>
                                    <input type="text" className="text-black font-semibold p-2 m-2 rounded-xl bg-slate-500 w-full"/> 
                                    <input type="text" className="text-black font-semibold p-2 m-2 rounded-xl bg-slate-500 w-full"/>
                                    <button onClick={handlClick} className="text-2xl text-center border-2 border-black rounded-lg mx-2 bg-red-700 font-bold hover:bg-red-500 hover:text-3xl hover:text-red-200 mt-2">Delete</button>
                        {/* </form> */}
                                </div>
                            </div>
                    </div>
                    <div className="grid grid-cols-2">
                    </div>
                </div>
                <div className="border-2 border-slate-400 m-3 rounded-lg p-2 h-100">
                    <div>
                        <h1 className="text-center text-3xl italic underline font-semibold">Product List</h1>
                    </div>
                    <div className="border-2 border-dotted rounded-lg border-slate-400 p-2 m-2 grid grid-cols-3 h-80 overflow-y-scroll">
                        <ol className="p-2 text-xl font-semibold">
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                            <li>Product 1</li>
                        </ol>
                        <ol className="p-2 text-xl font-semibold">
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                            <li>Price 1</li>
                        </ol>
                        <ol className="p-2 text-xl font-semibold">
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                            <li>Quantity 1</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="border-2 border-slate-400 m-3 rounded-lg p-2">
                <h1 className="text-3xl font-semibold text-center">Operating User</h1>
                <div className="grid grid-cols-3 border-2 border-dotted border-slate-500 rounded-xl">
                    <div className="grid grid-cols-2 border-2 border-dotted border-slate-500 rounded-lg m-5 col-span-2">
                        <div className="">
                            <h3 className="text-3xl p-5">Username: </h3>
                            <h3 className="text-3xl p-5">Full Name: </h3>
                            <h3 className="text-3xl p-5">Changes: </h3>
                            <h3 className="text-3xl p-5">Date: </h3>
                            <h3 className="text-3xl p-5">Time: </h3>
                        </div>
                        <div className="grid grid-row-5 m-2">
                            <input type="text" className="my-2 rounded-md bg-slate-500"/>
                            <input type="text" className="my-2 rounded-md bg-slate-500"/>
                            <input type="text" className="my-2 rounded-md bg-slate-500"/>
                            <input type="text" className="my-2 rounded-md bg-slate-500"/>
                            <input type="text" className="my-2 rounded-md bg-slate-500"/>
                        </div>
                    </div>
                    <div className="p-20 border-2 border-dotted m-5 border-slate-500 rounded-lg">
                        <div className="qr h-full">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}