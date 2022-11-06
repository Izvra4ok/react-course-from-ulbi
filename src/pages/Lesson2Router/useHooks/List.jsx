import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useScroll} from "../../../hooks/Lesson2/useScroll";

const List = () => {


    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    async function fetchTodos(page, limit) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
        setTodos(prev => [...prev, ...response.data]);
        setPage(prev => prev + 1);
    }

    return (
        <div ref={parentRef} style={{height: "80vh", overflow: "auto", marginTop: "20px"}}>
            {todos.map(todo =>
                <div key={todo.id} style={{padding: "30px", margin: "5px 0", border: "2px solid teal"}}>
                    {todo.id}.{todo.title}
                </div>)}
            <div ref={childRef} style={{height: "20px", background: "red"}}></div>
        </div>
    );
};

export default List;