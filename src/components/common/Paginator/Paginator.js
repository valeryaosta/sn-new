import React, {useState} from "react";
import styles from "../Paginator/Paginator.module.css";
import classNames from "classnames";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {
                portionNumber > 1 &&
                <button className={styles.btn} onClick={ () => {setPortionNumber(portionNumber - 1)} }>PREV</button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span className={classNames({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                                 key={p}
                                 onClick={() => {
                                     onPageChanged(p)
                                 }}>{p} </span>
                })}


            {
                portionCount > portionNumber &&
                <button className={styles.btn} onClick={ () => {setPortionNumber(portionNumber + 1)} }>NEXT</button>
            }

        </div>
    );
};

export default Paginator;