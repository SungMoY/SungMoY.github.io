import React from "react";
import lawnmower from "../assets/lawnmower.png";
import globe from "../assets/globe.png";
import mutantmaize from "../assets/mutantmaize.png";

export default function Contentscreen() {
    return (
        <div id="contentscreen">
            <div className="md:w-1/2 mx-auto text-center text-5xl md:text-6xl italic underline text-white pb-8 font-bold pt-32">
                My Projects
            </div>
            <div className="w-5/6 mx-auto flex flex-col xl:flex-row text-black py-8 gap-x-0 xl:justify-center gap-y-12">

                <div className="rounded-xl bg-white drop-shadow-xl w-80 h-96 flex-none overflow-x-hidden flex flex-col px-6 mx-auto">
                    <div className="row-span-1 h-1/4 text-center font-bold text-4xl flex items-center mx-auto py-2">
                        Lawnmower
                    </div>
                    <div className="row-span-1 h-5/6">
                        Full stack web application for real-time collaborative editing and sharing of 2D tilesets and tilemaps
                        <img 
                            src={lawnmower}
                            className="mx-auto w-3/5 mt-4"
                            alt="lawnmower"
                        />
                    </div>
                    <a href="https://github.com/Lawnmower-416/Lawnmower" className="row-span-1 pb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Repository
                    </a>
                </div>


                <div className="rounded-xl bg-white drop-shadow-xl w-80 h-96 flex-none overflow-x-hidden flex flex-col px-6 mx-auto">
                    <div className="row-span-1 h-1/4 text-center font-bold text-2xl flex items-center mx-auto py-2">
                        What Makes People Happy
                    </div>
                    <div className="row-span-1 h-5/6">
                        Data analysis and machine learning model training of the World Happiness Report datasets using Python
                        <img 
                            src={globe}
                            className="mx-auto w-3/5"
                            alt="globe"
                        />
                    </div>
                    <a href="https://github.com/SungMoY/World-Happiness-Reports-Data-Analysis" className="row-span-1 pb-4 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Repository
                    </a>  
                </div>

                <div className="rounded-xl bg-white drop-shadow-xl w-80 h-96 flex-none overflow-x-hidden flex flex-col px-6 mx-auto">
                    <div className="row-span-1 h-1/4 text-center font-bold text-3xl flex items-center mx-auto py-2">
                        Mutant Maize
                    </div>
                    <div className="row-span-1 h-5/6">
                        2D platformer game built in Wolfie2D for web browsers. Written in Typescript
                        <img 
                            src={mutantmaize}
                            className="mx-auto w-4/5 mt-2"
                            alt="mutantmaize"
                        />
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