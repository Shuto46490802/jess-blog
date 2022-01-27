import React from "react";
import Image from "next/image";

const SectionImage = () => {
    return (
        <div className="section-image overflow-hidden position-relative w-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                    </figure>

                </div>

            </div>


        </div>
    );
}

export default SectionImage;