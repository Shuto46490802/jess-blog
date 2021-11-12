const Pagination = () => {
    return (
        <div className="pagination mx-md-2 pt-lg-5 pb-2 d-flex justify-content-between align-items-center flex-wrap">

            <button className="pagination-prev-button pagination-control-button position-relative p-0">

                <div className="line-link-pagination">Prev</div>

            </button>

            <ul className="pagination-list small d-flex pt-3">

                <li className="pagination-list-item">

                    <button className="">

                        <span className="line-link-pagination">1</span>

                    </button>

                </li>

                <li className="pagination-list-item">

                    <button className="">

                        <span className="line-link-pagination">2</span>

                    </button>

                </li>

                <li className="pagination-list-item">

                    <button className="">

                        <span className="line-link-pagination">3</span>

                    </button>

                </li>

                <li className="pagination-list-item">

                    <button className="">

                        <span className="line-link-pagination">4</span>

                    </button>

                </li>

                <li className="pagination-list-item">...</li>

                <li className="pagination-list-item">

                    <button className="">

                        <span className="line-link-pagination">8</span>

                    </button>

                </li>

            </ul>

            <button className="pagination-next-button pagination-control-button position-relative">

                <div className="line-link-pagination">Next</div>

            </button>

        </div>
    );
}

export default Pagination;