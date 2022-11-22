import React from 'react';
import classes from "./Paginator.module.css";
import {useGetPages} from "../../../utils/pages";

const Paginator = ({totalPages,page,changePage}) => {

    let pagesArray = useGetPages(totalPages);

    return (
        <div>
            <div className={classes.paginator}>
                {pagesArray.map(p =>
                        <span onClick={() => changePage(p)}
                              className={page === p ? "paginator__btn__current" : "paginator__btns"} key={p}>
                    {p}
                </span>
                )}
            </div>
        </div>
    );
};

export default Paginator;