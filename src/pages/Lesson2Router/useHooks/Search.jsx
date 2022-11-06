import React, {useState} from 'react';
import axios from "axios";
import {useDebounced} from "../../../hooks/Lesson2/useDebounced";

const Search = () => {

    const [value, setValue] = useState("");
    const debouncedSearch  = useDebounced(search,500)

    async function search(query) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?query=` + query)
    }

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedSearch(e.target.value)
    }

    return (
        <div>
            <h2>{value}</h2>
            <input type="text"
                   value={value}
                   onChange={onChange}/>
        </div>
    );
};

export default Search;