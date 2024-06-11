import React from 'react';
import ProfilePic from '../assets/profile.png';

const HeroSection: React.FC = () => {
    // Need to convert into String
    const profilePicSrc: string = ProfilePic.src;

    return (
        <div id='#' className=''>
             <div data-aos="fade-up" className="col-span-12 md:hidden md:col-span-6 p-5 flex justify-center">
                    <img src={profilePicSrc} height={400} width={400} className='rounded-md aspect-square object-cover' alt="Profile" />
                </div>
            <div data-aos="fade-left" className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 flex flex-col justify-center text-start">
                    <h1>Hey, I am </h1>
                    <h1 className='text-6xl font-bold heading'>Dhruv Soni</h1>
                    <div className="line w-[176px] p-1 bg-purple-500 mt-2"></div>

                    {/* description */}
                    <p className='mt-2'>As a passionate full stack developer, I thrive on bringing ideas to life through code. With a strong foundation in both frontend and backend development, I possess the versatility to tackle projects from end to end, ensuring seamless user experiences and robust functionalities.</p>
                </div>
                {/* Conditionally render the image based on screen size */}
                <div data-aos="fade-up" className="col-span-12 image-continaer xs:hidden xs:col-span-6 md:col-span-6 p-5 flex justify-center">
                    <img src={profilePicSrc} height={400} width={400} className='rounded-md aspect-square object-cover' alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
