export default function Admin() {
    return (
        <div className="drop-shadow-[0_6px_6px_rgba(0.5,0.5,0.5,0.5)] border-slate-500 border-2 rounded-md h-screen m-5 p-3 bg-slate-500 grid grid-rows-3">
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
                        </ul>
                    </div>
                    
                </div>            
                <div className="border-2 border-slate-400 rounded-md overflow-y-scroll">
                    <h1 className="sticky top-0 bg-slate-600 text-center justify-center text-3xl font-semibold">Users</h1>
                    <div className="">
                        <ul className="m-3 text-xl">
                            <li>User 1</li>
                            <li>User 2</li>
                            <li>User 3</li>
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>     
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>
                            <li>User 4</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-2 border-dotted border-slate-400 rounded-lg my-2">
                <h1 className="text-center text-3xl font-semibold italic">Statistics</h1>
                <div className="grid grid-cols-3 gap-3">
                    <div className="m-2 border">
                        <h1 className="text-2xl text-center font-semibold">Products</h1>
                    </div>
                    <div className="m-2 border">
                        <h1 className="text-2xl text-center font-semibold">Transactions</h1>
                    </div>
                    <div className="m-2 border">
                        <h1 className="text-2xl text-center font-semibold">Users</h1>
                    </div>
                </div>
            </div>            
        </div>
    );
}