import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Components
import { animateParallaxInsideImage } from "../PageLayouts/animation";

const ContactContent = ({ image1, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateParallaxInsideImage(imgWrapperRef.current, imgRef.current)
        }
    }, [isPageLoaded]);

    const imgWrapperRef = useRef();
    const imgRef = useRef();

    return (
        <div className="contact-content d-flex flex-wrap">

            <div  className="contact-content-image__wrapper bg-p col-md-5 col-xl-6 col">

                <div className="contact-content-image__inner col-8 offset-2 col-xl-6 offset-xl-3 pt-3 pb-3 pb-md-4 pt-md-4 ps-1 pe-1">

                    <div className="overflow-hidden position-relative">

                        <div className="contact-content-image">

                            <div ref={imgWrapperRef} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                                <div ref={imgRef} className="parallax should-animate">

                                    <figure className="fig__wrapper">

                                        <Image src={image1} layout="fill" objectFit="cover" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="contact-content-form__wrapper form-wrapper col-md-6 offset-md-1 offset-xl-0 ps-1 pe-1 pt-2 ps-md-0 pt-md-0 p-xl-0">

                <div className="contact-content-form__inner col-xl-8 offset-xl-2">

                    <h1 className="h3 pt-xl-3 mt-md-1 text-g mb-1 mb-md-6 f-serif">
                        Contact
                    </h1>

                    <p className="ls-big mb-2 mb-md-3 text-g uppercase small f-sans">
                        Contact Me
                    </p>

                    <h5 className="mb-1 mb-md-2 f-serif">
                        Fill the form below:
                    </h5>

                    <div className="contact-content-container position-relative mt-6 mt-md-0">

                        <form action="" className="contact-content-form f-sans">

                            <div className="d-flex flex-wrap w-100">

                                <div className="input col-md-6 pe-md-1">

                                    <div className="input__wrapper">

                                        <span className="label">
                                            First Name
                                        </span>

                                        <input type="text" name="firstname" ariaRequired="true" />

                                        <small className="help is-danger">The field is required.</small>

                                        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input col-md-6 ps-md-1">

                                    <div className="input__wrapper">

                                        <span className="label">
                                            Last Name
                                        </span>

                                        <input type="text" name="lastname" ariaRequired="true" />

                                        <small className="help is-danger">The field is required.</small>

                                        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input col-md-6 pe-md-1">

                                    <div className="input__wrapper">

                                        <span className="label">
                                            Email
                                        </span>

                                        <input type="text" name="email" ariaRequired="true" />

                                        <small className="help is-danger">The field is required.</small>

                                        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input col-md-6 ps-md-1">

                                    <div className="input__wrapper">

                                        <span className="label">
                                            Subject
                                        </span>

                                        <input type="text" name="subject" ariaRequired="true" />

                                        <small className="help is-danger">The field is required.</small>

                                        <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input__wrapper col-12">

                                    <div className="text-area position-relative">

                                        <span class="label">Message</span>

                                        <textarea name="bodyMessage" style={{ height: "22px" }} ariaRequired="true" />

                                    </div>

                                    <small className="help is-danger">The field is required.</small>

                                    <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                </div>

                            </div>

                            <div className="w-100">

                                <div>

                                    <button type="submit" className="button ">

                                        <div className="w-100 rectangle-button position-relative uppercase">

                                            <span className="button-background position-absolute t-0 l-0 w-100 h-100 behind-1" />

                                            <span className="button-text f-sans">
                                                Send
                                            </span>

                                        </div>

                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ContactContent;