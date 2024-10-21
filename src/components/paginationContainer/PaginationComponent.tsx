import React from 'react';
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const onClickPrevHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    };

    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    };

    return (
        <div>
            <button onClick={onClickPrevHandler}>Prev</button>
            <button onClick={onClickNextHandler}>Next</button>
        </div>
    );
};

export default PaginationComponent;