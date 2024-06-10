export default function Card() {
    return (
        <div className="drop-shadow-[0_6px_6px_rgba(0.5,0.5,0.5,0.5)] border-slate-500 border-2 rounded-md h-screen m-5 p-5 bg-transparent grid grid-cols-2">
            <div className="border-slate-500 border-2 rounded-lg">
                <h1 className="text-center text-xl font-semibold">Transaction Info</h1>
                <div className="grid grid-rows-2 h-fit">
                    <div className="m-5 grid grid-rows-6 gap-3 text-xl">
                        <h3>Date:</h3>
                        <h3>Item(s):</h3>
                        <h3>Cost:</h3>
                        <h3>In stock:</h3>
                        <h3>Total:</h3>
                        <h3>Amount Paid:</h3>
                        <h3>Change:</h3>
                    </div>
                    <div className="m-5 border-2 border-slate-500 rounded-lg text-xl h-fill">
                        <h1 className="text-center font-semibold">Cash Register</h1>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="border-2 border-black rounded-lg p-5 mx-5 my-12 text-3xl font-bold text-center">Total:</div>
                            <div className="border-2 border-black rounded-lg p-5 mx-5 my-12 text-3xl font-bold text-center bg-slate-400">
                                <h1>M0</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <button className="text-2xl text-center border-2 border-black rounded-lg mx-5 bg-white font-semibold">Reset</button>
                        <button className="text-2xl text-center border-2 border-black rounded-lg mx-5 bg-red-700 font-bold">Logout</button>
                    </div>
                </div>
            </div>
            <div className="mx-2 grid grid-rows-2 gap-2">
                <div className=" border-slate-500 border-2 rounded-lg">
                    <h1 className="text-center text-xl font-semibold">Product Info</h1>
                    <div className="m-5 grid grid-rows-6 gap-5 text-xl">
                        <h3>Item(s):</h3>
                        <h3>Cost:</h3>
                        <h3>In stock:</h3>
                        <h3>Total:</h3>
                        <h3>Amount Paid:</h3>
                        <h3>Change:</h3>
                    </div>
                </div>
                <div className=" border-slate-500 border-2 rounded-lg">
                    <h1 className="text-center text-xl font-semibold">Cashier Info</h1>
                    <div className="m-5 grid grid-rows-6 gap-5 text-xl">
                        <h3>Name:</h3>
                        <h3>Login Time:</h3>
                        <h3>In stock:</h3>
                        <h3>Total:</h3>
                        <h3>Amount Paid:</h3>
                        <h3>Change:</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}