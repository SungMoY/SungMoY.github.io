import React from 'react';
import Navbar from './components/Navbar'
import Splashscreen from './components/Splashscreen'
import Contentscreen from './components/Contentscreen'
import Contactscreen from './components/Contactscreen'
import Aboutscreen from './components/Aboutscreen';
import Creditsscreen from './components/Creditsscreen';

export default function App() {

    // <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
    // <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
    // <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
    // <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
    // <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>

    return (
        <div className="h-screen font-customfont bg-black">
            <Navbar/>
            <Splashscreen/>
            <div className="bg-gradient-to-t from-sky-900 to-cyan-800
                            flex flex-col gap-2 h-fit py-8">
                <Aboutscreen/>
                <Contentscreen/>
                <Contactscreen/>
                <Creditsscreen/>
            </div>
        </div>
    );
}
