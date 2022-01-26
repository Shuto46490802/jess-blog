const Humburger = ({ handleClick, isSearchOpen, isMenuOpen }) => {
    return (
        <button
            type="button"
            className={`hamburger ${isSearchOpen || isMenuOpen ? "is-active" : ""}`}
            onClick={() => {
                handleClick()
            }}
        >

            <div className="hamburger__inner">

                <span className="line line-1" />

                <span className="line line-2" />

            </div>

        </button>
    );
}

export default Humburger;