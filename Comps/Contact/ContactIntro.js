import React from "react";

const ContactIntro = ({ image }) => {
    return (
        <div className="contact-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <h1 className="contact-intro-heading text-center uppercase d-flex flex-column flex-center" >

                <span className="h1__wrapper">

                    <div className="h1__inner should-animate">
                        We Would Love To
                    </div>

                </span>

                <span className="h1__wrapper">

                    <div className="h1__inner should-animate">
                        Hear From You
                    </div>

                </span>

            </h1>

        </div>
    );
}

export default ContactIntro;