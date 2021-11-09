import React from "react";

const Cursor = () => {
    return (
        <div className="cursor">

            <div className="cursor-circle__wrapper">

                <div className="cursor-circle">

                    <div className="cursor-text">View</div>

                    <div className="curcor-text-2">Contact</div>

                    <div className="cursor-loaderSpinner">

                        <svg viewBox="0 0 80 80">

                            <circle cx="40" cy="40" r="39" />

                        </svg>

                    </div>

                </div>

            </div>

            <div className="cursor-dot__wrapper">

                <div className="cursor-dot" />

            </div>

        </div>
    );
}

export default Cursor;