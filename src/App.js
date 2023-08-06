import React from 'react';
import Navbar from './components/Navbar'
import Splashscreen from './components/Splashscreen'
import Contentscreen from './components/Contentscreen'
import Contactscreen from './components/Contactscreen'
import Aboutscreen from './components/Aboutscreen';
import Creditsscreen from './components/Creditsscreen';

export default function App() {
    return (
        <div className="h-screen font-customfont bg-black">
            <Navbar/>
            <Splashscreen/>
            <div className="bg-gradient-to-t from-sky-900 to-cyan-800
                            flex flex-col gap-2 h-fit py-2">
                <Aboutscreen/>
                <Contentscreen/>
                <Contactscreen/>
                <Creditsscreen/>
            </div>
        </div>
    );
}
