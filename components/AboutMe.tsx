import React from "react";
import ProfilePic from "../assets/profile1.png";

const AboutMe: React.FC = () => {

    const profilePicSrc: string = ProfilePic.src;

    return (
        <div className="mt-10 p-5" id="about">
            <div data-aos="fade-up" className="flex justify-center flex-wrap">
                <div className="md:w-[40%] flex ">
                    <img src={profilePicSrc} className="aspect-square object-cover rounded-md" height={400} width={400} alt="myimg2" />
                </div>
                <div data-aos="fade-up" className="md:w-[60%] flex flex-col justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold my-4">About Me</h1>
                    </div>
                    {/* update this */}
                    <div className="content p-2">
                        <h1 data-aos="fade-up" className="my-2 font-semibold ">About</h1>

                        <p data-aos="fade-up" className="my-2">Hello! I&apos;m Dhruv Soni, a passionate Full Stack Developer with 2 years of experience in designing, developing, and deploying robust web applications. My journey in software development has equipped me with a comprehensive understanding of both front-end and back-end technologies, allowing me to create seamless and user-friendly digital experiences.</p>

                        <h1 data-aos="fade-up" className="my-2 font-semibold">Education</h1>
                        <p data-aos="fade-up">I hold a bechlore&apos;s degree in Computer Science from Gujrat Technology University [GTU], where I honed my technical skills and developed a solid foundation in computer science principles.</p>

                        <h1 data-aos="fade-up" className="my-2 font-semibold">Personal Interests</h1>
                        <p data-aos="fade-up">When I&apos;m not coding, you can find me exploring nature and traveling. These activities help me stay creative and balanced, providing new perspectives and inspiration. I believe in the power of continuous improvement and strive to bring my best self to every project I undertake.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;