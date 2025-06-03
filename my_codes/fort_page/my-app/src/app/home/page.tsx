import React from "react";
const home = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-s4">Taste Hunt</h1>
                <p className="text-lg mb-8">Order Your Best Food any Time</p>
                <button className="btn btn-active">Book Now</button>
                <p className="text-lg mb-4">Hungry?Let's Fix that</p>
                <button className="btn btn-active btn-menu">Menu</button>
            </div>
            <div>
            
            </div>
            <label className="btn btn-circle swap swap-rotate">
                
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
        </div>
    );
};
export default home;