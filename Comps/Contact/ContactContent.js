import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
//Components
import { animateParallaxInsideImage } from "../PageLayouts/animation";
//Lib
import { gsap } from "gsap";

const ContactContent = ({ image1, isPageLoaded, footerEmail }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateParallaxInsideImage(imgWrapperRef.current, imgRef.current);
            validateEmail(footerEmail)
            setEmail(footerEmail);
        }
    }, [isPageLoaded]);

    const imgWrapperRef = useRef();
    const imgRef = useRef();

    const [firstName, setFirstName] = useState("");
    const [firstNameStart, setFirstNameStart] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastName, setLastName] = useState("")
    const [lastNameStart, setLastNameStart] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const [subject, setSubject] = useState("");
    const [subjectStart, setSubjectStart] = useState(false);
    const [subjectError, setSubjectError] = useState(false);

    const [message, setMessage] = useState("");
    const [messageStart, setMessageStart] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailStart, setEmailStart] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    const [isSubmited, setIsSubmited] = useState(false);
    const formWrapperRef = useRef();
    const thanksMessageRef = useRef();

    useEffect(() => {
        if (isSubmited) {
            gsap.timeline({ paused: false })
                .fromTo(formWrapperRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.75
                    })
                .set(formWrapperRef.current,
                    {
                        visibility: "hidden"
                    })
                .set(thanksMessageRef.current,
                    {
                        visibility: "visible"
                    }, 0.4)
                .fromTo(thanksMessageRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.75
                    }, 0.4)

        } else {
            gsap.timeline({ paused: false })
                .fromTo(thanksMessageRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.75
                    })
                .set(thanksMessageRef.current,
                    {
                        visibility: "hidden"
                    })
                .set(formWrapperRef.current,
                    {
                        visibility: "visible"
                    }, 0.4)
                .fromTo(formWrapperRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.75
                    }, 0.4)
        }
    }, [isSubmited])

    const validateEmail = (_email) => {

        var mailformat = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/

        if (_email.match(mailformat)) {
            setEmailInvalid(false);
        } else {
            setEmailInvalid(true);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                lastName: lastName,
                subject: subject,
                message: message
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        })

        setFirstName("");
        setLastName("");
        setSubject("");
        setMessage("");
        setEmail("");

        const { error } = await res.json();
        if (error) {
            setIsSubmited(true)
            return;
        }
    }

    return (
        <div className="contact-content d-flex flex-wrap">

            <div className="contact-content-image__wrapper bg-p col-12 col-md-5 col-xl-6 col">

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

                        <form ref={formWrapperRef} onSubmit={handleSubmit} action="" className="contact-content-form f-sans">

                            <div className="d-flex flex-wrap w-100">

                                <div className="input col-md-6 col-12 pe-md-1">

                                    <div className="input__wrapper">

                                        <span className={`label ${firstNameStart ? "input-start" : ""}`}>
                                            First Name
                                        </span>

                                        <input
                                            value={firstName}
                                            type="text"
                                            name="firstname"
                                            aria-required="true"
                                            onChange={(e) => {
                                                setFirstName(e.target.value)
                                            }}
                                            onBlur={() => {
                                                if (firstName === "") {
                                                    setFirstNameError(true);
                                                    setFirstNameStart(false);
                                                } else {
                                                    setFirstNameError(false);
                                                }
                                            }}
                                            onFocus={() => {
                                                setFirstNameStart(true);
                                            }}
                                        />

                                        <small
                                            style={firstNameError ? { display: "block" } : {}}
                                            className="help is-danger"
                                        >
                                            The field is required.
                                        </small>

                                        <svg style={!firstNameError && firstName !== "" ? { display: "block" } : {}} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input col-md-6 col-12 ps-md-1">

                                    <div className="input__wrapper">

                                        <span className={`label ${lastNameStart ? "input-start" : ""}`}>
                                            Last Name
                                        </span>

                                        <input
                                            type="text"
                                            name="lastname"
                                            aria-required="true"
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value)
                                            }}
                                            onBlur={() => {
                                                if (lastName === "") {
                                                    setLastNameError(true);
                                                    setLastNameStart(false);
                                                } else {
                                                    setLastNameError(false);
                                                }
                                            }}
                                            onFocus={() => {
                                                setLastNameStart(true);
                                            }}
                                        />

                                        <small
                                            style={lastNameError ? { display: "block" } : {}}
                                            className="help is-danger"
                                        >
                                            The field is required.
                                        </small>

                                        <svg style={!lastNameError && lastName !== "" ? { display: "block" } : {}} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input col-md-6 col-12 pe-md-1">

                                    <div className="input__wrapper">

                                        <span className={`label ${emailStart ? "input-start" : ""}`}>
                                            Email
                                        </span>

                                        <input
                                            type="text"
                                            name="email"
                                            aria-required="true"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            onBlur={() => {
                                                if (email === "") {
                                                    setEmailError(true);
                                                    setEmailStart(false);
                                                } else {
                                                    setEmailError(false);
                                                }
                                                validateEmail(email);
                                            }}
                                            onFocus={() => {
                                                setEmailStart(true);
                                            }}
                                        />

                                        <small
                                            style={emailError || emailInvalid ? { display: "block" } : {}}
                                            className="help is-danger"
                                        >
                                            {
                                                emailError
                                                    ? "The field is required."
                                                    : emailInvalid
                                                        ? "The email must be a valid email."
                                                        : null
                                            }
                                        </small>

                                        <svg style={!emailError && !emailInvalid !== "" ? { display: "block" } : {}} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input col-md-6 col-12 ps-md-1">

                                    <div className="input__wrapper">

                                        <span className={`label ${subjectStart ? "input-start" : ""}`}>
                                            Subject
                                        </span>

                                        <input
                                            type="text"
                                            name="subject"
                                            aria-required="true"
                                            value={subject}
                                            onChange={(e) => {
                                                setSubject(e.target.value)
                                            }}
                                            onBlur={() => {
                                                if (subject === "") {
                                                    setSubjectError(true);
                                                    setSubjectStart(false);
                                                } else {
                                                    setSubjectError(false);
                                                }
                                            }}
                                            onFocus={() => {
                                                setSubjectStart(true);
                                            }}
                                        />

                                        <small
                                            style={subjectError ? { display: "block" } : {}}
                                            className="help is-danger"
                                        >
                                            The field is required.
                                        </small>

                                        <svg style={!subjectError && subject !== "" ? { display: "block" } : {}} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

                                    </div>

                                </div>

                                <div className="input__wrapper col-12">

                                    <div className="text-area position-relative">

                                        <span className={`label ${messageStart ? "input-start" : ""}`}>
                                            Message
                                        </span>

                                        <textarea
                                            name="bodyMessage"
                                            style={{ height: "22px" }}
                                            aria-required="true"
                                            value={message}
                                            onChange={(e) => {
                                                setMessage(e.target.value)
                                            }}
                                            onBlur={() => {
                                                if (message === "") {
                                                    setMessageError(true);
                                                    setMessageStart(false);
                                                } else {
                                                    setMessageError(false);
                                                }
                                            }}
                                            onFocus={() => {
                                                setMessageStart(true);
                                            }}
                                        />

                                    </div>

                                    <small
                                        style={messageError ? { display: "block" } : {}}
                                        className="help is-danger"
                                    >
                                        The field is required.
                                    </small>

                                    <svg style={!messageError && message !== "" ? { display: "block" } : {}} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" className="checkmark"><polygon points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon></svg>

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

                        <div ref={thanksMessageRef} className="thank-you-message__wrapper w-100  position-absolute center text-center d-flex flex-column flex-center">

                            <div className="thank-you-message text-center f-sans text-g h4">
                                Thank you for your message.
                            </div>

                            <div
                                onClick={() => { setIsSubmited(false) }}
                                className="mt-5 text-g f-gt back-botton">

                                <div className="d-flex flex-center">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9b918e" viewBox="0 0 31.49 31.49" className="arrow-icon ms-1 transition"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                                    <p className="ms-6 mb-0 h5">back</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ContactContent;