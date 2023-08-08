import React from "react";
import mongodb from "../assets/mongodblogo.jpg";
import express from "../assets/expresslogo.png";
import react from "../assets/reactlogo.jpg";
import node from "../assets/nodejslogo.png";
import python from "../assets/pythonlogo.png";
import java from "../assets/javalogo.jpg";
import c from "../assets/clogo.png";
import assembly from "../assets/assemblylogo.png";


export default function Aboutscreen() {
    return (
        <div id="aboutscreen"
            className="w-3/4 mx-auto grid grid-cols-2">
            <div className="flex flex-col text-white mx-auto gap-y-6">
                <div className="text-6xl font-bold text-center">
                    About Me
                </div>
                <div className="w-4/5 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                </div>
                </div>
            <div
                className="flex flex-row justify-center space-x-20 py-2">
                <div className="bg-white rounded-3xl">
                    <div className="text-black text-4xl text-center font-bold mt-6">
                        MERN Stack
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-auto w-2/3 gap-y-10 py-10 text-2xl">
                        <img 
                            src={mongodb}
                            className="border-amber-800 border-2 rounded-full"
                            alt="mongodb"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">mongoDB</div>
                        <img 
                            src={express}
                            className="border-white border-2 rounded-full"
                            alt="express"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">Express</div>
                        <img 
                            src={react}
                            className="border-white border-2 rounded-full"
                            alt="react"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">React</div>
                        <img 
                            src={node}
                            className="border-white border-2"
                            alt="node"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">Node.js</div>
                    </div>
                </div>
                <div className=" bg-white rounded-3xl">
                    <div className="text-black text-4xl text-center font-bold mt-6">
                        Software Dev
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-auto w-2/3 gap-y-10 py-10 text-2xl">
                        <img 
                            src={python}
                            className="border-white border-2"
                            alt="python"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">Python</div>
                        <img 
                            src={java}
                            className="border-white border-2"
                            alt="java"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">Java</div>
                        <img 
                            src={c}
                            className="border-white border-2"
                            alt="c"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">C</div>
                        <img 
                            src={assembly}
                            className="border-white border-2"
                            alt="assembly"
                        />
                        <div className="col-span-2 flex items-center pl-2 pb-1">Assembly</div>
                    </div>
                </div>
            </div>
        </div>
    )
}