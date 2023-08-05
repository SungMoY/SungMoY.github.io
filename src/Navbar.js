import React, { useState, useEffect } from 'react'

export default function Navbar() {

    const [navSize, setnavSize] = useState("md:py-10 py-8");
    const [navColor, setnavColor] = useState("transparent text-white");
    const [barColor, setbarColor] = useState("text-gray-700");

    const listenScrollEvent = () => {
        let scrollVal = document.getElementById("splashscreen").offsetHeight/8
        window.scrollY > scrollVal ? setnavColor("bg-gray-700 text-white") : setnavColor("transparent text-white");
        window.scrollY > scrollVal ? setnavSize("py-4") : setnavSize("md:py-10 py-8");
        window.scrollY > scrollVal ? setbarColor("text-white") : setbarColor("text-gray-700");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    return () => {
        window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);

    function scrollToHome() {
        document.getElementById("splashscreen").scrollIntoView({behavior: "smooth"});
    }

    function scrollToProjects() {
        document.getElementById("contentscreen").scrollIntoView({behavior: "smooth"});
    }

    function scrollToContactMe() {
        document.getElementById("contactscreen").scrollIntoView({behavior: "smooth"});
    }

    function scrollToAboutMe() {
        document.getElementById("aboutscreen").scrollIntoView({behavior: "smooth"});
    }

    return (
    <div
        id="navbar"
        className={`fixed ${navSize} ${navColor} duration-150 rounded-b-lg w-full md:w-5/6 lg:w-3/5 md:left-1/2 md:transform md:-translate-x-1/2`}>
        <div className="mx-auto absolute top-0 left-0 right-0 bottom-0 border-b-2 border-gray-700 w-3/4 -z-50" />

        <div className="flex flex-row justify-between md:justify-center md:text-2xl px-4">
            <button className="2xl:px-16 md:px-6" onClick={scrollToHome}>
                Home
            </button>
            <div className={`${barColor} `}>|</div>
            <button className="2xl:px-16 md:px-6" onClick={scrollToAboutMe}>
                About
            </button>
            <div className={`${barColor}`}>|</div>
            <button className="2xl:px-16 md:px-6" onClick={scrollToProjects}>
                Projects
            </button>
            <div className={`${barColor}`}>|</div>
            <button className="2xl:px-16 md:px-6" onClick={scrollToContactMe}>
                Contact
            </button>
            <div className={`${barColor}`}>|</div>
            <button className="2xl:px-16 md:px-6">
                Resume
            </button>

        </div>
    </div>
  );
}