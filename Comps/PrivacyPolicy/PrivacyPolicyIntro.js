import React from "react";

const PrivacyPolicyIntro = ({ image }) => {
    return (
        <div className="privacy-policy-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div className="privacy-policy-intro-sub-heading small text-center mb-6">

                <span>
                    Terms of
                </span>

            </div>

            <h1 className="privacy-policy-intro-heading text-center m-0">

                <span>
                    Service & Policy
                </span>

            </h1>

        </div>
    );
}

export default PrivacyPolicyIntro;