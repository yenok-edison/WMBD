"use client";

import React, { FC, useState } from "react";
// import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleNewsletterSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter your email address.");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyPdvNv-PT1oyX5Y-0Sd1_hZMdCDzTY1T0tEHdWDccJWfEh4OAZIgjT6zajdmDhwQ1D/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify({
                        sheetName: "Newsletter",
                        type: "newsletter",
                        email,
                    }),
                }
            );

            const result = await response.json();

            if (result.success) {
                setMessage(
                    "Thank you for subscribing!."
                );
                setEmail("");
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Failed to subscribe.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <footer className="bg-secondary">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap md:pt-44 pt-8 md:pb-20 pb-10 border-b border-solid border-dark_border gap-10">

                    {/* Left - Logo */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/images/logo/WMBD-Website.png"
                                alt="logo"
                                width={180}
                                height={80}
                                quality={100}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-PaleCerulean text-sm leading-7 max-w-[320px] mt-5">
                            An organisation-specific business coaching program designed to remove
                            barriers & accelerate growth.
                        </p>
                    </div>

                    {/* Center - Social */}
                    <div className="flex flex-col items-center">
                        <p className="text-PaleCerulean text-3xl tracking-wide uppercase">
                            Connect With Us
                        </p>
                        <ul className="flex items-center gap-5 mb-4 mt-5">

                            {/* YouTube */}
                            {/* <li>
                                <Link
                                    href="/"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group hover:bg-ElectricAqua transition-all duration-300"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        className="group-hover:fill-secondary"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M23.5 6.2C23.2 5 22.3 4.1 21.1 3.8C19 3.2 12 3.2 12 3.2C12 3.2 5 3.2 2.9 3.8C1.7 4.1 0.8 5 0.5 6.2C0 8.3 0 12 0 12C0 12 0 15.7 0.5 17.8C0.8 19 1.7 19.9 2.9 20.2C5 20.8 12 20.8 12 20.8C12 20.8 19 20.8 21.1 20.2C22.3 19.9 23.2 19 23.5 17.8C24 15.7 24 12 24 12C24 12 24 8.3 23.5 6.2ZM9.6 15.7V8.3L15.8 12L9.6 15.7Z" />
                                    </svg>
                                </Link>
                            </li> */}

                            {/* LinkedIn */}
                            <li>
                                <Link
                                    href="https://in.linkedin.com/company/winmore-bydesign"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group hover:bg-ElectricAqua transition-all duration-300"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 26 28"
                                        fill="#fff"
                                        className="group-hover:fill-secondary"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24.1249 0H1.87514C0.839478 0 0 0.893637 0 1.99611V25.6813C0 26.7838 0.839478 27.6774 1.87514 27.6774H24.1249C25.1605 27.6774 26 26.7838 26 25.6813V1.99611C26 0.893637 25.1605 0 24.1249 0ZM9.22235 20.9202H6.05626V10.7805H9.22235V20.9202ZM7.6394 9.39586H7.61877C6.55634 9.39586 5.8692 8.61731 5.8692 7.64427C5.8692 6.64928 6.57736 5.89226 7.66043 5.89226C8.7435 5.89226 9.41 6.64928 9.43063 7.64427C9.43063 8.61731 8.7435 9.39586 7.6394 9.39586ZM20.6386 20.9202H17.4729V15.4957C17.4729 14.1324 17.0145 13.2027 15.8689 13.2027C14.9944 13.2027 14.4734 13.8298 14.2445 14.4352C14.1608 14.6519 14.1404 14.9547 14.1404 15.2577V20.9202H10.9745V10.7805H14.1404V12.2161C14.5611 11.5252 15.3139 10.5425 16.9937 10.5425C19.0767 10.5425 20.6386 11.9917 20.6386 15.1061V20.9202Z" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group hover:bg-ElectricAqua transition-all duration-300"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-white group-hover:stroke-secondary"
                                    >
                                        <path
                                            d="M22 16.92V20.5C22 21.33 21.33 22 20.5 22C10.28 22 2 13.72 2 3.5C2 2.67 2.67 2 3.5 2H7.08C7.8 2 8.42 2.5 8.57 3.2L9.33 6.72C9.46 7.35 9.23 8 8.74 8.39L6.59 10.11C7.98 12.93 11.07 16.02 13.89 17.41L15.61 15.26C16 14.77 16.65 14.54 17.28 14.67L20.8 15.43C21.5 15.58 22 16.2 22 16.92Z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            {/* Instagram */}
                            {/* <li>
                                <Link
                                    href="/"
                                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group hover:bg-ElectricAqua transition-all duration-300"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        className="group-hover:fill-secondary"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 2C4.2 2 2 4.2 2 7V17C2 19.8 4.2 22 7 22H17C19.8 22 22 19.8 22 17V7C22 4.2 19.8 2 17 2H7ZM18 5.5C18.8 5.5 19.5 6.2 19.5 7C19.5 7.8 18.8 8.5 18 8.5C17.2 8.5 16.5 7.8 16.5 7C16.5 6.2 17.2 5.5 18 5.5ZM12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12C7 9.2 9.2 7 12 7ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z" />
                                    </svg>
                                </Link>
                            </li> */}
                        </ul>


                    </div>

                    {/* Right - Contact */}
                    <div className="text-right">
                        <p className="text-white text-lg font-semibold mb-2">
                            Contact Us
                        </p>

                        <a
                            href="mailto:info@winmorebydesign.com"
                            className="text-PaleCerulean hover:text-ElectricAqua transition-all duration-300"
                        >
                            info@winmorebydesign.com
                        </a>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 items-center py-8">
                    <div className="col-span-5">
                        <p className="text-base font-normal text-PaleCerulean">
                            © All rights reserved.
                        </p>

                    </div>
                    <div className="col-span-7 grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <p className="text-xl text-PaleCerulean font-normal col-span-4">
                            Subscribe Newsletter
                        </p>
                        <div className="w-full col-span-8">
                            {/* <form className="newsletter-form bg-white dark:bg-transparent flex rounded-md justify-end overflow-hidden rounded-tl-lg rounded-bl-lg"> */}
                            <form
                                onSubmit={handleNewsletterSubmit}
                                className="newsletter-form bg-white flex rounded-md justify-end overflow-hidden rounded-tl-lg rounded-bl-lg"
                            >
                                {/* <input
                                    type="email"
                                    placeholder="Email address*"
                                    className="p-4 text-base border-0 rounded-md outline-0 w-[calc(100%_-_137px)] flex dark:bg-midnight_text dark:text-white dark:rounded-none dark:w-full dark:bg-darkmode"
                                /> */}
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address*"
                                    required
                                    className="p-4 text-base border-0 rounded-md outline-0 w-[calc(100%_-_137px)]"
                                />
                                {/* <button
                                    type="submit"
                                    className="btn btn-1 hover-filled-slide-down bg-RegalBlue"
                                >
                                    <span className="!border-0 !text-white">Subscribe</span>
                                </button> */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn-1 hover-filled-slide-down bg-RegalBlue"
                                >
                                    <span className="!border-0 !text-white">
                                        {loading ? "Submitting..." : "Subscribe"}
                                    </span>
                                </button>
                            </form>
                            {message && (
                                <p className="mt-3 text-sm text-green-500">
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
