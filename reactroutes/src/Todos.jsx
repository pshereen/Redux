import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import TodoCard from './TodoCard'

const Todos = ()=>{
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) =>{
            const responseTodos =  res.data;
            setTodos(responseTodos) ;
        });
    }, []);
    
    return (
        <div>
            {todos? (
                <div style = {{display : 'flex', flexWrap : "wrap "}}> 
                    {todos.slice(0, 10).map((todo) =>(<TodoCard todo = {todo} />))}
                </div>
            )
            :<CircularProgress />}
        </div>
    )
}

export default Todos ;