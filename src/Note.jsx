
import './Note.css'
import React, { useState } from 'react';
import moment from 'moment';
import NewNote from './NewNote';

export default function Note() {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setToDoList] = useState([])

    function addTodo(value) {
        if (value.trim().length === 0) {
        return; 
        }
        const newTodo = {
            text: value,
            created: moment().format('MMM Do h:mm A'),
        };
        const newToDoList = [newTodo,...todoList];
        // todoList.push(value)
        setToDoList(newToDoList);
        setInputValue('')
    }

    return (
        <>
            <div className='note'>
                <textarea className='input-note' placeholder='Add new note ...' type="text" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
                <button onClick={() => addTodo(inputValue)}>Add</button>
                <NewNote todoList={todoList} setToDoList={setToDoList} />
            </div>
        </>)
}