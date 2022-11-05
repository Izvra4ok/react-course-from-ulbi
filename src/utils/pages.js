import {useMemo} from "react";

export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
};

export const useGetPages = (totalPages) => {

    let getPagesArray = useMemo(() => {
        let resultPages = [];
        for (let i = 0; i < totalPages; i++) {
            resultPages.push(i + 1);
        }
        return resultPages;
    },[totalPages])

    return getPagesArray
};

