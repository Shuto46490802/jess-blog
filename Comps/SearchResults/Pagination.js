import React, { useEffect } from "react";

const Pagination = ({ paginate, currentPage }) => {

    const getPagination = (_numOfPage, _currentPage) => {

        const pageNumArr = [];
        for (let i = 1; i <= _numOfPage; i++) {
            pageNumArr.push(i);
        };

        if (_numOfPage <= 1) {
            return (
                <li className="pagination-list-item">

                    <button onClick={() => paginate(1, 1)} className="">

                        <span className="line-link-pagination active">1</span>

                    </button>

                </li>
            )
        } else if (_numOfPage === 2) {
            return (
                <>

                    <li className="pagination-list-item">

                        <button
                            onClick={() => {
                                paginate(1, _currentPage);
                            }}
                            className=""
                        >

                            <span className={`line-link-pagination ${_currentPage === 1 ? "active" : null}`}>1</span>

                        </button>

                    </li>

                    <li className="pagination-list-item">

                        <button
                            onClick={() => {
                                paginate(2, _currentPage);
                            }}
                            className=""
                        >

                            <span className={`line-link-pagination ${_currentPage === 2 ? "active" : null}`}>2</span>

                        </button>

                    </li>

                </>
            )
        } else if (_numOfPage === 3) {
            return (
                <>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(1, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 1 ? "active" : null}`}>1</span>

                        </button>

                    </li>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(2, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 2 ? "active" : null}`}>2</span>

                        </button>

                    </li>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(3, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 3 ? "active" : null}`}>3</span>

                        </button>

                    </li>

                </>
            )
        } else if (_numOfPage === 4) {
            return (
                <>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(1, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 1 ? "active" : null}`}>1</span>

                        </button>

                    </li>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(2, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 2 ? "active" : null}`}>2</span>

                        </button>

                    </li>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(3, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 3 ? "active" : null}`}>3</span>

                        </button>

                    </li>

                    <li className="pagination-list-item">

                        <button onClick={() => paginate(4, _currentPage)} className="">

                            <span className={`line-link-pagination ${_currentPage === 4 ? "active" : null}`}>4</span>

                        </button>

                    </li>

                </>
            )
        } else {
            if (_currentPage < 3) {
                return (
                    <>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(1, _currentPage)} className="">

                                <span className={`line-link-pagination ${_currentPage === 1 ? "active" : null}`}>1</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(2, _currentPage)} className="">

                                <span className={`line-link-pagination ${_currentPage === 2 ? "active" : null}`}>2</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(3, _currentPage)} className="">

                                <span className="line-link-pagination">3</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">...</li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_numOfPage, _currentPage)} className="">

                                <span className="line-link-pagination">{_numOfPage}</span>

                            </button>

                        </li>

                    </>
                )
            } else if (_currentPage > _numOfPage - 2) {
                return (
                    <>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(1, _currentPage)} className="">

                                <span className="line-link-pagination">1</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">...</li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_numOfPage - 2, _currentPage)} className="">

                                <span className="line-link-pagination">{_numOfPage - 2}</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_numOfPage - 1, _currentPage)} className="">

                                <span className={`line-link-pagination ${_currentPage === _numOfPage - 1 ? "active" : null}`}>{_numOfPage - 1}</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_numOfPage, _currentPage)} className="">

                                <span className={`line-link-pagination ${_currentPage === _numOfPage ? "active" : null}`}>{_numOfPage}</span>

                            </button>

                        </li>

                    </>
                )
            } else {
                return (
                    <>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(1, _currentPage)} className="">

                                <span className="line-link-pagination">1</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">...</li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_currentPage - 1, _currentPage)} className="">

                                <span className="line-link-pagination">{_currentPage - 1}</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_currentPage, _currentPage)} className="">

                                <span className="line-link-pagination active">{_currentPage}</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_currentPage + 1, _currentPage)} className="">

                                <span className="line-link-pagination">{_currentPage + 1}</span>

                            </button>

                        </li>

                        <li className="pagination-list-item">...</li>

                        <li className="pagination-list-item">

                            <button onClick={() => paginate(_numOfPage, _currentPage)} className="">

                                <span className="line-link-pagination">{_numOfPage}</span>

                            </button>

                        </li>

                    </>
                )
            }
        }

    }

    return (
        <div className="pagination mx-md-2 pt-lg-5 pb-2 d-flex justify-content-between align-items-center flex-wrap">

            <button className="pagination-prev-button pagination-control-button position-relative p-0">

                <div className="line-link-pagination">Prev</div>

            </button>

            <ul className="pagination-list small d-flex pt-3">

                {getPagination(9, currentPage)}

            </ul>

            <button className="pagination-next-button pagination-control-button position-relative">

                <div className="line-link-pagination">Next</div>

            </button>

        </div>
    );
}

export default Pagination;