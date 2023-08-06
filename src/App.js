import React from 'react';
import Navbar from './Navbar'
import Splashscreen from './Splashscreen'
import Contentscreen from './Contentscreen'
import Contactscreen from './Contactscreen'
import Aboutscreen from './Aboutscreen';
import Creditsscreen from './Creditsscreen';

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
