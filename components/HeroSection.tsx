"use client"

import React from 'react';
import ProfilePic from '../assets/profile.png';
import { ReactTyped } from 'react-typed';

const HeroSection: React.FC = () => {
    const profilePicSrc: string = ProfilePic.src;

    return (
        <div id='#' className=''>
            <div data-aos="fade-up" className="col-span-12 md:hidden md:col-span-6 p-5 flex justify-center">
                <img src={profilePicSrc} height={400} width={400} className='rounded-md aspect-square object-cover' alt="Profile" />
            </div>
            <div data-aos="fade-left" className="grid grid-cols-12 gap-4 p-5">
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center text-start">
                    <h1 className='mb-4'>Hey, I am </h1>
                    <h1 className='text-6xl font-bold heading'>
                        <ReactTyped
                            strings={['Dhruv Soni','Full Stack Developer']}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </h1>
                    <div className="line w-[176px] p-1 bg-purple-500 mt-2"></div>
                    <p className='mt-2'>As a passionate full stack developer, I thrive on bringing ideas to life through code. With a strong foundation in both frontend and backend development, I possess the versatility to tackle projects from end to end, ensuring seamless user experiences and robust functionalities.</p>
                </div>
                <div data-aos="fade-up" className="col-span-12 image-continaer xs:hidden xs:col-span-6 md:col-span-6 p-5 flex justify-end">
                    <img src={profilePicSrc} height={400} width={400} className='rounded-md aspect-square object-cover' alt="Profile" />
                </div>
            </div>
            <div data-aos="fade-up" className="w-full flex flex-wrap mt-5 justify-center">
                <div className="text-center md:w-1/2 lg:w-1/4 px-2 mb-4">
                    <h1 className='text-3xl font-semibold'>+700</h1>
                    <p>hours of work</p>
                </div>
                <div className="text-center md:w-1/2 lg:w-1/4 px-2 mb-4">
                    <h1 className='text-3xl font-semibold'>+10</h1>
                    <p>Delivered project</p>
                </div>
                <div className="text-center md:w-1/2 lg:w-1/4 px-2 mb-4">
                    <h1 className='text-3xl font-semibold'>~98%</h1>
                    <p>Success job rate</p>
                </div>
                <div className="text-center md:w-1/2 lg:w-1/4 px-2 mb-4">
                    <h1 className='text-3xl font-semibold'>4.6</h1>
                    <p>Average Rating</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

