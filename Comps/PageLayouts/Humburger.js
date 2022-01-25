const Humburger = ({ isSearchOpen, setIsSearchOpen }) => {
    return (
        <button
            type="button"
            className={`hamburger ${isSearchOpen ? "is-active" : ""}`}
            onClick={() => {
                if(isSearchOpen){
                    setIsSearchOpen(false);
                }
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