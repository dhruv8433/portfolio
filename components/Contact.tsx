"use client"

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Spline from '@splinetool/react-spline';

interface IFormInput {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // Manual validation logic
        let formIsValid = true;

        // Check name
        if (!data.name) {
            errors.name = { type: "required", message: "Name is required" };
            formIsValid = false;
        }

        // Check email
        if (!data.email) {
            errors.email = { type: "required", message: "Email is required" };
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = { type: "pattern", message: "Email is invalid" };
            formIsValid = false;
        }

        // Check subject
        if (!data.subject) {
            errors.subject = { type: "required", message: "Subject is required" };
            formIsValid = false;
        }

        // Check message
        if (!data.message) {
            errors.message = { type: "required", message: "Message is required" };
            formIsValid = false;
        }

        // If form is valid, submit data
        if (formIsValid) {
            console.log(data); // Replace with actual form submission logic
        }
    };

    return (
        <div id="contact" className="flex flex-col items-center justify-center py-8">
            <div data-aos="fade-up" className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full h-auto ">
                <div className="w-full md:w-1/2 p-5">
                    <Spline
                        scene="https://prod.spline.design/k1vod-zEg4plR6Ce/scene.splinecode"
                        style={{ background: "transparent" }}
                    />
                </div>
                <div data-aos="fade-up" className="md:w-[50%] p-5">
                    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="form-group">
                            <label data-aos="fade-up" htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Name</label>
                            <input data-aos="fade-up" type="text" id="name" {...register("name")} className={`mt-1 p-2 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div className="form-group">
                            <label data-aos="fade-up" htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                            <input data-aos="fade-up" type="email" id="email" {...register("email")} className={`mt-1 p-2 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="form-group">
                            <label data-aos="fade-up" htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white">Subject</label>
                            <input data-aos="fade-up" type="text" id="subject" {...register("subject")} className={`mt-1 p-2 block w-full border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`} />
                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                        </div>
                        <div className="form-group">
                            <label data-aos="fade-up" htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
                            <textarea data-aos="fade-up" id="message" {...register("message")} rows={5} className={`mt-1 p-2 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                        </div>
                        <button data-aos="fade-up" type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
