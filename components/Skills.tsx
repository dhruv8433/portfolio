import React from 'react';
import MarqueeText from './MarqueeText';

const Skills: React.FC = () => {
    return (
        <div id='Skills' className='skills my-10'>
            <div className="">
                <h1 data-aos="fade-up" className='text-3xl w-full flex justify-center font-semibold'>Skills</h1>
            </div>
            <MarqueeText />
        </div>
    )
}

export default Skills;