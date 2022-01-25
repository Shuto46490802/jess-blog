const Search = () => {
    return (
        <div className="search col-md-7 col mb-3">

            <h2 className="search-headline text-center mb-4">
                Search
            </h2>

            <div className="search-form__wrapper d-flex px-1 px-md-0 w-100">

                <div className="input-holder w-100">

                    <input
                        type="text"
                        id="input"
                        name="input"
                        className="search-input"
                        placeholder="Search products"
                    // value={input}
                    // onChange={(e) => {
                    //     setInput(e.target.value)
                    //     validateInput(input)
                    // }}
                    // onKeyDown={async (e) => {
                    //     if (e.key === "Enter") {
                    //         if (isValidated) {
                    //             handleSubmit(e)
                    //         } else {
                    //             return;
                    //         }
                    //     }
                    // }}
                    />

                </div>

                <button className="submit-button d-flex align-items-center ">

                    <h5 className="submit-button-text">search</h5>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" className="arrow-icon ms-1 transition"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                </button>

            </div>

        </div>
    );
}

export default Search;