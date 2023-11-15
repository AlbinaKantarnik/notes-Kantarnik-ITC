import React, { useEffect, useState } from 'react';

export default function InputNote({ title, setTitle, inputValue, setInputValue, setChangesMade, todoList }) {
    const [originalTitle, setOriginalTitle] = useState(title);
    const [originalInputValue, setOriginalInputValue] = useState(inputValue);

    useEffect(() => {
        setOriginalTitle(title || '');
        setOriginalInputValue(inputValue || '');
    }, [title, inputValue]);

    useEffect(() => {
        setOriginalTitle(title);
    }, [title]);

    useEffect(() => {
        setOriginalInputValue(inputValue);
    }, [inputValue]);

    const handleInputChange = (event) => {
        setTitle(event.target.value);
        if (typeof setChangesMade === 'function') {
            setChangesMade(true);
        }
    };

    const handleTextareaChange = (event) => {
        setInputValue(event.target.value);
        if (typeof setChangesMade === 'function') {
            setChangesMade(true);
        }
    };

    return (
        <>
            <input
                className='input-title'
                placeholder='Title'
                type="text"
                title={title}
                value={title || originalTitle || ''}
                onChange={handleInputChange} />

            <textarea
                className='input-note'
                placeholder='Add new note ...'
                type="text"
                value={inputValue || originalInputValue || ''}
                onChange={handleTextareaChange} />
        </>
    )
}