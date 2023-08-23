'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
const Hero = () => {
    return (
        <div>
            <div className="container  mx-auto p-9 h-96 text-center bg-gray-100">
                <div className="">
                <h1 className='text-3xl font-bold pb-4'>Welcome to Hero Section</h1>
                <p>Grow with Data.</p>
                <div className='text-2xl font-bold py-2 flex justify-center'>
                    <p>First, flexiable finanace for  </p>
                    <span className="text-indigo-600 font-bold pl-2"> 
                        <Typewriter                     
                        options={{
                        strings: [ 'Next', 'React', "Tailwind.CSS"],
                        autoStart: true,
                        loop: true,}}/>
                    </span> 
                </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;