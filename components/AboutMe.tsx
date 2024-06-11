import React from "react";
import ProfilePic from "../assets/profile1.png";

const AboutMe: React.FC = () => {

    const profilePicSrc: string = ProfilePic.src;

    return (
        <div className="mt-10" id="about">
            <div data-aos="fade-up"  className="flex justify-center flex-wrap">
                <div className="md:w-[40%] flex ">
                    <img src={profilePicSrc} className="aspect-square object-cover rounded-md" height={400} width={400} alt="myimg2"/>
                </div>
                <div data-aos="fade-up"  className="md:w-[60%] flex flex-col justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold mb-4">About Me</h1>
                    </div>
                    <div className="content p-2">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur itaque perspiciatis tempore modi. Explicabo, quas. Commodi, necessitatibus reiciendis quisquam officiis at eveniet dicta nostrum dignissimos ipsum iure quo nobis accusantium? Asperiores modi officia rem, iure id mollitia excepturi commodi facere qui, nemo ipsa nihil explicabo sint omnis eveniet ratione expedita.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatibus officia distinctio itaque quidem repellendus debitis enim, voluptate nisi laboriosam est quod, dolore magni consequatur porro quas ducimus illum unde.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vero!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;