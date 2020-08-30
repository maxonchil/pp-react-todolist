import React, {useEffect, useState} from 'react';
import './TodoList.scss';

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const fetchTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((res) => res.json())
            .then((res) => setTodo(res));
    };
    useEffect(() => {
        fetchTodo();
    },[]);
    return (
        <ul>
            {todo.map((todoItem) => <li key={todoItem.id}>{todoItem.title}</li>)}
        </ul>
    )
};

export default TodoList;
