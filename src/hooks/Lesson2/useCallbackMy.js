// import {useCallback} from "react";
// import axios from "axios";
//
// export const fetchMy = useCallback((setTodos, page,limit,setPage) => {
//     async function fetchTodos(page, limit) {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
//         setTodos(prev => [...prev, ...response.data]);
//         setPage(prev => prev + 1);
//     }
//
//     return fetchTodos
// }, [])