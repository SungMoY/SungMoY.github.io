import React from "react";

export default function Contentscreen() {
    return (
        <div id="contentscreen">
            <div className="md:w-1/2 mx-auto text-center text-5xl md:text-6xl italic underline text-white pb-8 font-bold pt-32">
                My Projects
            </div>
            <div className="w-3/5 mx-auto justify-center flex flex-row space-x-12 text-black overflow-auto py-8">
                <div className="rounded-xl bg-white px-2 py-2 drop-shadow-xl">
                    <div className="text-center font-bold text-3xl py-2">
                        Lawnmower
                    </div>
                    <div>
                        Full stack web application for real-time collaborative editing and sharing of 
                        2D tilesets and tilemaps
                    </div>
                    <a href="https://github.com/Lawnmower-416/Lawnmower" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Learn more
                    </a>
                </div>
                <div className="rounded-xl bg-white px-2 py-2 drop-shadow-xl">
                    <div className="text-center font-bold text-3xl py-2">
                        Mutant Maize
                    </div>
                    <div>
                        2D platformer written in Typescript
                    </div>
                    <a href="https://github.com/SungMoY/Mutant-Maize" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Learn more
                    </a>
                    <br/>
                    <a href="https://mutant-maize.web.app/" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Play
                    </a>
                </div>
                <div className="rounded-xl bg-white px-2 py-2 drop-shadow-xl">
                    <div className="text-center font-bold text-3xl py-2">
                        What Makes People in a Country Happy?
                    </div>
                    <div>
                        Data analysis and predictive machine learning modeling of the World Happiness Report
                    </div>
                    <a href="https://github.com/SungMoY/World-Happiness-Reports-Data-Analysis" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}