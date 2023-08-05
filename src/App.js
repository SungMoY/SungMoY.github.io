import React from 'react';
import Navbar from './Navbar'
import Splashscreen from './Splashscreen'
import Contentscreen from './Contentscreen'
import Contactscreen from './Contactscreen'
import Aboutscreen from './Aboutscreen';

export default function App() {
    return (
        <div className="flex-col h-screen font-customfont bg-black">
            <Navbar/>
            <Splashscreen/>
            <Aboutscreen/>
            <Contentscreen/>
            <Contactscreen/>
        </div>
    );
}