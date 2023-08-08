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
            className="mx-4 xl:w-3/4 xl:mx-auto grid xl:grid-cols-2 py-6 gap-12  xl:gap-0">
            <div className="flex flex-col text-white mx-auto gap-y-6">
                <div className="text-6xl font-bold text-center underline">
                    About Me
                </div>
                <div className="w-4/5 mx-auto">
                    I graduated cum laude from Stony Brook University with a Bachelor's degree in Computer Science. 
                    I have extensive experience in creating and deploying full stack web applications from the ground up.
                    My current interest is in machine learning and extending the capabiltiies of generative AI.
                    I am looking for a full time position as a software engineer.
                    <br/>
                    <br/>
                    I also have experience in data analysis and visualization.
                </div>
            </div>
            <div className="flex flex-row space-x-6 xl:space-x-20 xl:py-2">
                <div className="bg-white rounded-3xl drop-shadow-2xl font-bold">
                    <div className="text-black sm:text-4xl text-center font-bold mt-4  xl:mt-6 underline">
                        MERN Stack
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-auto w-2/3 sm:gap-y-10 py-4  xl:py-10 sm:text-2xl">
                        <img 
                            src={mongodb}
                            className="border-amber-800 border-2 rounded-full"
                            alt="mongodb"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">mongoDB</div>
                        <img 
                            src={express}
                            className="border-white border-2 rounded-full"
                            alt="express"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">Express</div>
                        <img 
                            src={react}
                            className="border-white border-2 rounded-full"
                            alt="react"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">React</div>
                        <img 
                            src={node}
                            className="border-white border-2"
                            alt="node"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">Node.js</div>
                    </div>
                </div>
                <div className=" bg-white rounded-3xl drop-shadow-2xl font-bold">
                    <div className="text-black sm:text-4xl text-center underline font-bold mt-4  xl:mt-6">
                        Software Dev
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-auto w-2/3 sm:gap-y-10 py-4  xl:py-10 sm:text-2xl">
                        <img 
                            src={python}
                            className="border-white border-2"
                            alt="python"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">Python</div>
                        <img 
                            src={java}
                            className="border-white border-2"
                            alt="java"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">Java</div>
                        <img 
                            src={c}
                            className="border-white border-2"
                            alt="c"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">C</div>
                        <img 
                            src={assembly}
                            className="border-white border-2"
                            alt="assembly"
                        />
                        <div className="col-span-2 flex items-center sm:pl-2 pb-1">Assembly</div>
                    </div>
                </div>
            </div>
        </div>
    )
}