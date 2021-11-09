import React from "react";

const AboutIntro = ({ image }) => {
    return (
        <div className="about-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }}/>

                </div>

            </div>

            <div className="about-intro-sub-heading small text-center mb-6">

                <span>
                    WHO I AM AND WHY I DO WHAT I DO
                </span>

            </div>

            <h1 className="about-intro-heading text-center m-0">

                <span>
                    About Jess Blog
                </span>

            </h1>

        </div>
    );
}

export default AboutIntro;