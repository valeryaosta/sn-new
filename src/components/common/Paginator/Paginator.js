import React from "react";
import style from "../Paginator/Paginator.module.css";


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.userPages}>
            {pages.map(p => {
                return <span onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? style.selectedPage : ''}>
                                    {p}
                    </span>
            })}
        </div>
    );
};

export default Paginator;