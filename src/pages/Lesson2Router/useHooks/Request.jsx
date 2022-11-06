import React from 'react';
import axios from "axios";
import {useRequest} from "./useRequest";


const Request = () => {

    const [todos, loading, error] = useRequest(fetchTodos);

    async function fetchTodos(query) {
        return await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>Error</h2>
    }

    return (
        <div>
            {todos && todos.map(todo =>
                    <div key={todo.id} style={{padding: "30px", margin: "5px 0", border: "2px solid teal"}}>
                        {todo.id}.{todo.title}
                    </div>)
            }

        </div>
    );
};

export default Request;