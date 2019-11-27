import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({totalCount, pageSize, onPageChanged, currentPage}) => {

    const pagesCount = Math.ceil(totalCount / pageSize);

    let pagesNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesNum.push(i);
    };
    return (
            <ul>
                {
                    pagesNum.map(p => {
                        return <li key={p}
                            onClick={() => onPageChanged(p)}
                            className={currentPage === p ? style.active : ''}
                        >{p}</li>
                    })
                }
            </ul>            
    );
}

export default Pagination;