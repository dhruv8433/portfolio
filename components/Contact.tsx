"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Spline from '@splinetool/react-spline';
import 'tailwindcss/tailwind.css';

interface IFormInput {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <div id="contact" className="flex flex-col items-center justify-center py-8">
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full h-auto ">
                <div className="w-full md:w-1/2 p-5">
                    <Spline
                        scene="https://prod.spline.design/k1vod-zEg4plR6Ce/scene.splinecode"
                        style={{background: "transparent"}}
                    />
                </div>
                <div className="md:w-[50%] p-5">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="form-group">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" {...register("name")} className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" {...register("email")} className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" id="subject" {...register("subject")} className={`mt-1 p-2 block w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" {...register("message")} rows={5} className={`mt-1 p-2 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
