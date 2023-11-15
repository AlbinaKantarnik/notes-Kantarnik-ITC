
import './Note.css'
import React, { useState, useEffect} from 'react';
import moment from 'moment';
import NewNote from './NewNote';
import InputNote from './InputNote';

export default function Note() {
    const [inputValue, setInputValue] = useState('')
    const [title, setTitle] = useState('');
    const [todoList, setToDoList] = useState([])
    const [changesData, setChangesData] = useState('');

    function addTodo() {
        if (inputValue.trim().length === 0) {
        return; 
        }
        const newTodo = {
            title: title,
            text: inputValue,
            created: moment().format('MMM Do h:mm A'),
            changesData: null,
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
                <InputNote title={title} setTitle={setTitle} inputValue={inputValue} setInputValue={setInputValue}/>
                <button onClick={() => addTodo(title, inputValue)}>Add</button>
            </div>    
            <NewNote changesData={changesData} setChangesData={setChangesData} todoList={todoList} setToDoList={setToDoList} />
            
        </>)
}