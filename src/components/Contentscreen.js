import React from "react";

export default function Contentscreen() {
    return (
        <div id="contentscreen">
            <div className="w-1/2 mx-auto text-center text-6xl italic underline text-white pb-8">
                My Projects
            </div>
            <div className="w-3/5 mx-auto justify-center flex flex-row space-x-12 text-black overflow-auto">
                <div className="rounded-xl bg-white px-2 py-2 w-fit">
                    <div className="text-center font-bold text-3xl py-2">
                        Lawnmower
                    </div>
                    <div>
                        Full stack web application for real-time collaborative editing and sharing of 
                        2D tilesets and tilemaps
                    </div>
                    <a href="https://github.com/SungMoY" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Learn more
                    </a>
                </div>
                <div className="rounded-xl bg-white px-2 py-2 w-fit">
                    <div className="text-center font-bold text-3xl py-2">
                        Mutant Maize
                    </div>
                    <div>
                        2D platformer written in Typescript
                    </div>
                    <a href="https://github.com/SungMoY" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Learn more
                    </a>
                </div>
                <div className="rounded-xl bg-white px-2 py-2 w-fit">
                    <div className="text-center font-bold text-3xl py-2">
                        What Makes People in a Country Happy?
                    </div>
                    <div>
                        Data analysis and predictive modeling of the World Happiness Report
                    </div>
                    <a href="https://github.com/SungMoY" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
    )
}
//remove h-screen and start implementing