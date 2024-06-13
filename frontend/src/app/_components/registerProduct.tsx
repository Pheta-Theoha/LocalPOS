export const Product = () => {
    return (
        <div className="border-2 border-slate-500 m-5 grid grid-rows-2">
            <div className="grid grid-cols-2">
                <div className="border-2 border-slate-400 m-3 rounded-lg p-2">
                    <h1 className="text-center text-3xl italic underline font-semibold">Register</h1>
                    <div className="border-2 border-dotted rounded-lg border-slate-400 p-2 m-2">
                        <form className="p-2 text-xl font-semibold">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="grid grid-rows-4 place-items-left">
                                    <label className="mt-3">Code:</label>
                                    <label className="mt-3">Name:</label>
                                    <label className="mt-3">Price:</label>
                                    <label className="mt-3">Quantity:</label>
                                    <input type="submit" value="Save" className="text-2xl text-center border-2 border-black rounded-lg mr-12 bg-green-400 font-semibold hover:bg-blue-300 hover:text-3xl hover:text-blue-600" />
                                </div>
                                <div className="grid grid-rows-4 place-items-left">
                                    <input type="text" placeholder="" className="p-2 m-2 rounded-xl bg-slate-500"/>
                                    <input type="text" placeholder="" className="p-2 m-2 rounded-xl bg-slate-500"/>
                                    <input type="text" placeholder="" className="p-2 m-2 rounded-xl bg-slate-500"/> 
                                    <input type="text" placeholder="" className="p-2 m-2 rounded-xl bg-slate-500"/>
                                    <button className="text-2xl text-center border-2 border-black rounded-lg mx-2 bg-red-700 font-bold hover:bg-red-500 hover:text-3xl hover:text-red-200">Delete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-2">
                    </div>
                </div>
                <div className="border-2 border-slate-400 m-3 rounded-lg p-2 h-100">
                    <h1 className="text-center text-3xl italic underline font-semibold">Product List</h1>
                    <div className="border-2 border-dotted rounded-lg border-slate-400 p-2 m-2 grid grid-cols-3 h-80 overflow-y-scroll">
                        <ul className="p-2 text-xl font-semibold">
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
                        </ul>
                        <ul className="p-2 text-xl font-semibold">
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
                        </ul>
                        <ul className="p-2 text-xl font-semibold">
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
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-2 border-slate-400 m-3 rounded-lg p-2">
                <h1 className="text-3xl font-semibold text-center">Operating User</h1>
            </div>
        </div>
    );
}