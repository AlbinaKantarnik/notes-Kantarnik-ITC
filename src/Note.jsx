
import './Note.css'
import React, { useState } from 'react';

export default function Note() {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setToDoList] = useState([])

    function addTodo(value) {
        const newTodo = {
            text: value,
            created: new Date().toLocaleString()
        };
        const newToDoList = [newTodo,...todoList];
        todoList.push(value)
        setToDoList(newToDoList);
        setInputValue('')
    }

    return (
        <>
            <div className='note'>

                <textarea className='input-note' placeholder='Add new note ...' type="text" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
                <button onClick={() => addTodo(inputValue)}>Add</button>

                <div className="noteDiv">
                    {
                        todoList.map((item, index) => {
                            return (<div key={index}>
                                <p>My note: {item.text}</p>
                                <p>Created: {item.created}</p>
                            </div>)
                        })
                    }
                </div>
                
            </div>

        </>)
}