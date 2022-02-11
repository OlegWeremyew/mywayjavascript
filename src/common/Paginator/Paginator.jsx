import React from 'react';
import c from "./Paginator.module.css"

const Paginator = ({totalUserCount, currentPage, onPageChanged, pageSize}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize) / 200

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={c.numberPage}>
            {pages.map(p => {
                return <span className={currentPage === p && c.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;