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
        <div id="aboutscreen">
        <div className="md:w-1/2 mx-auto text-center text-5xl md:text-6xl italic underline text-white pb-8 font-bold pt-4">
            About Me
            </div>

        <div className="mx-4 xl:w-4/5 xl:mx-auto grid xl:grid-cols-2 py-6 gap-12 xl:gap-0">
            <div className="text-white mx-auto gap-y-6">
                <div className="w-4/5 mx-auto text-lg md:text-xl">
                    I graduated cum laude from Stony Brook University with a Bachelor's degree in Computer Science. My expertise is in full-stack web development, utilizing
                    the MERN (MongoDB, Express, React, Node.js) technology stack to create dynamic and responsive web applications. 
                    Additionally, I have extensive experience with object-oriented programming, computer networks, data analysis, and image processing.
                    <br/>
                    <br/>
                    My current interest is machine learning and generative AI. I am working on extending the powerful capabilities of text, image, and audio generation by AI and merging
                    them for seamless integration into a single application.
                    <br/>
                    <br/>
                    I am looking for a full time position as a software engineer, data analyst, or IT specialist.
                </div>
            </div>
            <div className="flex flex-row space-x-6 xl:space-x-20 xl:py-2">
                <div className="bg-white rounded-3xl drop-shadow-2xl font-bold">
                    <div className="text-black sm:text-4xl text-center font-bold mt-4 xl:mt-6 underline">
                        MERN Stack
                    </div>
                    <div className="grid grid-cols-3 gap-4 mx-auto w-2/3 sm:gap-y-10 py-4 xl:py-10 sm:text-2xl">
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
        </div>
    )
}