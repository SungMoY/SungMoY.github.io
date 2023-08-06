import React, { useState, useEffect } from 'react'

export default function Navbar() {

    const [navSize, setnavSize] = useState("md:py-10 py-8");
    const [navColor, setnavColor] = useState("transparent text-white");
    const [barColor, setbarColor] = useState("text-gray-700");

    const listenScrollEvent = () => {
        //let scrollVal = document.getElementById("splashscreen").offsetHeight/16
        window.scrollY > 0 ? setnavColor("bg-gray-700 text-white") : setnavColor("transparent text-white");
        window.scrollY > 0 ? setnavSize("py-4") : setnavSize("md:py-10 py-8");
        window.scrollY > 0 ? setbarColor("text-white") : setbarColor("text-gray-700");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);
      
      function scrollToHome() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      
      function scrollToAboutMe() {
        const pos = document.getElementById("aboutscreen").offsetTop - document.getElementById("navbar").offsetHeight;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
      
      function scrollToProjects() {
        const pos = document.getElementById("contentscreen").offsetTop - document.getElementById("navbar").offsetHeight;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }
      
      function scrollToContactMe() {
        const pos = document.getElementById("contactscreen").offsetTop - document.getElementById("navbar").offsetHeight;
        window.scrollTo({ top: pos, behavior: "smooth" });
      }

    return (
    <div
        id="navbar"
        className={`fixed ${navSize} ${navColor} duration-150 rounded-b-lg w-full md:w-4/6 lg:w-3/6 md:left-1/2 md:transform md:-translate-x-1/2`}>
        <div className="mx-auto absolute top-0 left-0 right-0 bottom-0 border-b-2 border-gray-700 w-4/5 -z-50" />

        <div className="flex flex-row justify-center md:text-2xl px-4">
            <button className="2xl:px-16 md:px-6 px-4 hover:text-orange-600 hover:font-semibold" onClick={scrollToHome}>
                Home
            </button>
            <div className={`${barColor} `}>|</div>
            <button className="2xl:px-16 md:px-6 px-4 hover:text-orange-600 hover:font-semibold" onClick={scrollToAboutMe}>
                About
            </button>
            <div className={`${barColor}`}>|</div>
            <button className="2xl:px-16 md:px-6 px-4 hover:text-orange-600 hover:font-semibold" onClick={scrollToProjects}>
                Projects
            </button>
            <div className={`${barColor}`}>|</div>
            <button className="2xl:px-16 md:px-6 px-4 hover:text-orange-600 hover:font-semibold" onClick={scrollToContactMe}>
                Contact
            </button>


        </div>
    </div>
  );
}