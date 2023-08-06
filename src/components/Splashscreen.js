import React from "react";
import photo from "../assets/portrait.jpg";

export default function Splashscreen() {
    return (
        <div
        id="splashscreen"
        className="h-full bg-[url(./assets/background.jpg)] bg-cover bg-center flex items-center">
            <div className="h-5/6 w-full lg:mb-0 md:mb-20 mb-28 flex flex-col-reverse lg:flex-row justify-center items-center">
                <div className="w-fit lg:h-fit">
                    <div className="text-white font lg:text-4xl md:text-2xl text-xl">
                        Hi! I'm
                    </div>
                    <div className="text-white font-bold lg:text-8xl md:text-4xl text-2xl underline">
                        Sung Mo Yang
                    </div>
                    <div className="text-white lg:text-4xl lg:mt-4 md:text-2xl mt-1 text-xl">
                        Full Stack Software Engineer
                    </div>
                </div>

                <div className="lg:w-20 lg:h-fit h-5"/>

                <div className="lg:w-1/4 lg:h-fit">
                    <img 
                        className="rounded-full lg:w-3/4 w-2/5 md:w-1/4 mx-auto lg:mx-0"
                        src={photo}
                        alt="Sung Mo Yang"
                    />
                </div>

            </div>
        </div>
    );
}