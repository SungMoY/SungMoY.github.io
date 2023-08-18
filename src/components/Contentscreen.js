import React from "react";

export default function Contentscreen() {
    return (
        <div id="contentscreen">
            <div className="md:w-1/2 mx-auto text-center text-5xl md:text-6xl italic underline text-white pb-8 font-bold pt-32">
                My Projects
            </div>
            <div className="w-5/6 mx-auto flex flex-row text-black py-8 gap-x-24 xl:justify-center overflow-x-scroll">

                <div className="rounded-xl bg-white drop-shadow-xl w-96 h-96 flex-none overflow-hidden flex flex-col px-6">
                    <div className="row-span-1 h-1/4 text-center font-bold text-4xl flex items-center mx-auto py-2">
                        Lawnmower
                    </div>
                    <div className="row-span-1 h-5/6">
                        Full stack web application for real-time collaborative editing and sharing of 2D tilesets and tilemaps
                    </div>
                    <a href="https://github.com/Lawnmower-416/Lawnmower" className="row-span-1 pb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Repository
                    </a>  
                </div>


                <div className="rounded-xl bg-white drop-shadow-xl w-96 h-96 flex-none overflow-hidden flex flex-col px-6">
                    <div className="row-span-1 h-1/4 text-center font-bold text-2xl flex items-center mx-auto py-2">
                        What Makes People Happy
                    </div>
                    <div className="row-span-1 h-5/6">
                        Data Analysis of the World Happiness Report using Python and Jupyter Notebook
                    </div>
                    <a href="https://github.com/SungMoY/World-Happiness-Reports-Data-Analysis" className="row-span-1 pb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Repository
                    </a>  
                </div>

                <div className="rounded-xl bg-white drop-shadow-xl w-96 h-96 flex-none overflow-hidden flex flex-col px-6">
                    <div className="row-span-1 h-1/4 text-center font-bold text-3xl flex items-center mx-auto py-2">
                        Mutant Maize
                    </div>
                    <div className="row-span-1 h-5/6">
                        2D platformer game built in Wolfie2D for web browsers
                    </div>
                    <a href="https://mutant-maize.web.app/" className="row-span-1 pb-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                            Play
                    </a>
                    <a href="https://github.com/SungMoY/Mutant-Maize" className="row-span-1 pb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Repository
                    </a> 
                </div>

            </div>
        </div>
    )
}