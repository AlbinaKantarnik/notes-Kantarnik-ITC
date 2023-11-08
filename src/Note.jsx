
import './Note.css'
import React, { useState, useEffect} from 'react';
import moment from 'moment';
import NewNote from './NewNote';

export default function Note() {
    const [inputValue, setInputValue] = useState('')
    const [title, setTitle] = useState('');
    const [todoList, setToDoList] = useState([])

    function addTodo() {
        if (inputValue.trim().length === 0) {
        return; 
        }
        const newTodo = {
            title: title,
            text: inputValue,
            created: moment().format('MMM Do h:mm A'),
        };
        const newToDoList = [newTodo,...todoList];
        setToDoList(newToDoList);
        setInputValue('');
        setTitle('');
    }

    useEffect(() => {
        function resizeTextarea() {
            var textarea = document.getElementsByTagName('textarea')[0];
            textarea.addEventListener('keydown', resize);
        }

        function resize() {
            var el = this;
            setTimeout(function() {
                el.style.cssText = 'height:auto; padding:0';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }, 3);
        }

        resizeTextarea(); 
    }, []); 

    return (
        <>
            <div className='note'>
                <input className='input-title' placeholder='Title' type="text" title={title} value={title} onChange={(event) => { setTitle(event.target.value) }} />
                <textarea className='input-note' placeholder='Add new note ...' type="text" value={inputValue} onChange={(event) => { setInputValue(event.target.value) }} />
                <button onClick={() => addTodo(title, inputValue)}>Add</button>
                <NewNote todoList={todoList} setToDoList={setToDoList} />
            </div>
        </>)
}