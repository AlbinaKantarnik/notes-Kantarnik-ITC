import React from 'react';
import NewItem from './NewItem';


const NewNote = ({ todoList, setToDoList }) => {
    const toDelete = (index) => {
        const newList = todoList.filter((_, i) => i !== index);
        setToDoList(newList);
    };

    return (
    <div className="noteDiv">
        {todoList.map((item, index) => (
            <NewItem key={index} item={item} index={index} toDelete={toDelete} />
        ))}
    </div>
    );
        };

export default NewNote