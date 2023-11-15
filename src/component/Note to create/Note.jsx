
import './Note.css'
import React, { useState, useEffect} from 'react';
import moment from 'moment';
import NewNote from '../New Note/NewNote';
import InputNote from '../Input Note/InputNote';

export default function Note() {
    const [inputValue, setInputValue] = useState('')
    const [title, setTitle] = useState('');
    const [todoList, setToDoList] = useState([])
    const [changesData, setChangesData] = useState('');

    useEffect(() => {
            if(todoList.length > 0) {
            localStorage.setItem('todoList', JSON.stringify(todoList));
            }
        }, [todoList]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('todoList'));
        if (!savedNotes || savedNotes.length === 0) {
            setToDoList([]);
        } else {
            setToDoList(savedNotes);
        }
    }, []);
    
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
                <InputNote title={title} setTitle={setTitle} inputValue={inputValue} todoList={todoList} setInputValue={setInputValue}/>
                <button onClick={() => addTodo(title, inputValue)}>Add note</button>
            </div>    
            <NewNote changesData={changesData} setChangesData={setChangesData} todoList={todoList} setToDoList={setToDoList} />
        </>)
}