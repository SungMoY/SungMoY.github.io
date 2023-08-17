import React from "react";
import resume from "../assets/resume.pdf"
import resumeIcon from "../assets/resume.png"
import email from "../assets/email.png"
import linkedIn from "../assets/linkedin.png"

export default function Contactscreen() {
    const [showMessage, setShowMessage] = React.useState(false);

    function handleEmailClick() {
        if (!showMessage) {
            console.log("Handle Email Click")
            navigator.clipboard.writeText("sungmoyang@outlook.com");
            handleTimer();
        }
    }

    function handleTimer() {
        setShowMessage(true);
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 1500);
        return () => clearTimeout(timer);
    }

    return (
        <div id="contactscreen">
            <div className="w-1/2 mx-auto text-center text-6xl italic underline text-white pb-8 font-bold pt-4">
                Contact Me
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-x-0 w-full lg:w-1/2 mx-auto gap-y-4 text-3xl text-black text-center py-4">
                <a href={resume} target="_blank" rel="noreferrer" className="bg-white grid grid-cols-3 rounded-2xl mx-auto w-1/4 hover:bg-gray-400 drop-shadow-2xl">
                    <img
                        src={resumeIcon}
                        className="col-span-1 w-4/6 my-auto ml-8"
                        alt="resume"
                    />
                    <div
                        className="col-span-2 my-auto mr-4">
                        Resumé
                    </div>
                </a>
                <button 
                    onClick={handleEmailClick}
                    className="bg-white grid grid-cols-3 rounded-2xl mx-auto w-1/4 hover:bg-gray-400 drop-shadow-2xl"> 
                    <img
                        src={email}
                        className={`col-span-1 w-3/4 my-auto ml-8 mb-2`}
                        alt="email"
                    />
                    <div className={`col-span-2 my-auto mr-0`}>
                        <div
                            className={`${showMessage ? 'opacity-0 hidden' : 'opacity-100'}`}>
                            Email
                        </div>
                        <div
                            className={`text-xl transition-all duration-200 ${showMessage ? 'opacity-100' : 'opacity-0 hidden'}`}>
                            Email<br/>copied!
                        </div>
                    </div>
                </button>

                
                <a href="https://www.linkedin.com/in/sung-mo-yang-35164727a/" className="bg-white grid grid-cols-3 rounded-2xl mx-auto w-1/4 hover:bg-gray-400 drop-shadow-2xl">                   
                    <img
                        src={linkedIn}
                        className="col-span-1 w-4/6 my-auto ml-4"
                        alt="linkedIn"
                    />
                    <div
                        className="col-span-2 my-auto mr-4">
                        LinkedIn
                    </div>
                </a>
            </div>
        </div>
    )
}