import React from "react";
import { ButtonLink } from "./ButtonLink";
import { StarRating } from "./StarRating";
import { GridPattern } from "./GridPattern";
import { Container } from "./Container";
import { TableOfContents } from "./TableOfContents";
import { Resources } from "./Resources";
import { Author } from "./Author";

const CoursePage = () => {
    return (
        <>
            <header className="overflow-hidden bg-slate-100 lg:bg-gray-900 lg:px-5">
                <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
                    <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
                        <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-primary-focus text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
                            <GridPattern
                                x="100%"
                                y="100%"
                                patternTransform="translate(112 64)"
                            />
                        </div>
                        <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
                            <img
                                src="https://images.unsplash.com/photo-1550025899-5f8a06b1b3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmslMjBoZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
                        <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block bg-primary-focus" />
                        <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
                            <figcaption className="mt-2 text-sm text-white">
                                <h1 className=" font-display text-5xl font-extrabold text-white sm:text-6xl">
                                    Introduction to the Angular
                                </h1>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
                        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                            <div className="flex justify-center text-yellow-600 lg:justify-start gap-2">
                                <StarRating />
                                <span className="text-gray-200">( 27 Ratings )</span>
                            </div>
                            <p className="mt-2 mb-2 text-2xl text-white-600">
                            Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
                            </p>
                            <p>
                                A video course by {" "}
                                <strong>Gojo Satoru</strong> ,{" "}
                                <strong>Kamado Tanjiro</strong>
                            </p>
                            <p className="flex mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                Created on 02 / 2021
                            </p>
                            <p className="flex mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                Updated on 09 / 2021
                            </p>
                            <p className="flex mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                    />
                                </svg>
                                English
                            </p>
                            <p className="flex mt-3 text-3xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 w-8 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                495
                            </p>
                            <div className="mt-8 flex space-x-4">
                                <ButtonLink href="#free-chapters" color="blue">
                                    Preview Course
                                </ButtonLink>
                                <ButtonLink href="#pricing" variant="outline" color="blue">
                                    Purchase Course
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section
                id="introduction"
                aria-labelledby="introduction-title"
                className="bg-gray-900 pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
            >
                <h2 id="introduction-title" className="sr-only">
                    Introduction
                </h2>
                <Container>
                    <p className="font-display text-4xl font-bold tracking-tight text-white">
                    These Angular docs help you learn and use the Angular framework and development platform.
                    </p>
                    <p className="mt-4 text-lg tracking-tight  text-white-600">
                    These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata.
                    </p>
                    <p className="mt-4 text-lg tracking-tight  text-white-600">
                    With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.
                    </p>
                    <p className="font-display text-3xl font-bold tracking-tight text-white mt-4">
                        What you will learn
                    </p>
                    <ul className="mt-8 space-y-3 text-lg tracking-tight text-white-600">
                        {[
                            "A component-based framework for building scalable web applications",
                            "A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more",
                            "A suite of developer tools to help you develop, build, test, and update your code",
                            "A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.",
                            "An HTML template that instructs Angular how to render the component",
                        ].map((feature) => (
                            <li key={feature} className="flex">
                                <svg
                                    aria-hidden="true"
                                    className="h-8 w-8 flex-none fill-white"
                                >
                                    <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
                                </svg>
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-lg tracking-tight text-white-600">
                        By the end of the book, you’ll have all the confidence you need to
                        dig in.
                    </p>
                </Container>
            </section>
            <TableOfContents />
            <Resources />
            <Author
                imgSrc="https://i.pinimg.com/originals/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg"
                name="Gojo Satoru"
            />
            <Author
                imgSrc="https://c4.wallpaperflare.com/wallpaper/923/727/796/anime-digital-art-artwork-2d-portrait-display-hd-wallpaper-preview.jpg"
                name="Kamado Tanjiro"
            />
        </>
    );
};

export default CoursePage;
