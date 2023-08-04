import React, { useState, useEffect } from 'react'

export default function Navbar() {

    const [navSize, setnavSize] = useState("py-10");
    const [navColor, setnavColor] = useState("transparent text-white");

    const listenScrollEvent = () => {
        let scrollVal = document.getElementById("splashscreen").offsetHeight/1.5
        window.scrollY > scrollVal ? setnavColor("bg-gray-600 text-white") : setnavColor("transparent text-white");
        window.scrollY > scrollVal ? setnavSize("py-4") : setnavSize("py-10");
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
        className={`fixed left-1/2 transform -translate-x-1/2 w-1/2 ${navSize} drop-shadow-4xl ${navColor} duration-300 rounded-b-2xl font-mono`}>


        <div className="mx-auto absolute top-0 left-0 right-0 bottom-0 border-b-2 border-gray-600 w-3/4 -z-50" />


        <div className="flex flex-row justify-center space-x-16">
            <button className="text-2xl px-4" onClick={scrollToHome}>
                Home
            </button>
            <button className="text-2xl px-4" onClick={scrollToAboutMe}>
                About
            </button>
            <button className="text-2xl px-4" onClick={scrollToProjects}>
                Projects
            </button>
            <button className="text-2xl px-4" onClick={scrollToContactMe}>
                Contact
            </button>
            <button className="text-2xl px-4">
                Resume
            </button>

        </div>
    </div>
  );
}