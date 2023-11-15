import React from 'react';
import { useState } from 'react';
import NewItem from '../Inside each note/NewItem';
import './NewNote.css'
import ModalNote from '../Modal/ModalNote';


const NewNote = ({ todoList, setToDoList, changesData, setChangesData }) => {
    const [showModal, setShowModal] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [displayedData, setDisplayedData] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);


    const toDelete = (index) => {
            const newList = todoList.filter((_, i) => i !== index);
            setToDoList(newList);
            if (newList.length === 0) {
                localStorage.removeItem('todoList');
            }
    };

    const handleShowModal = (item, index) => {
        setDisplayedText(item.text);
        setDisplayedData(item.created);
        setShowModal(true);
        setSelectedIndex(index);
    };

    return (
        <div className="noteDiv">
            {todoList.map((item, index) => (
                <NewItem key={index} item={item} index={index} toDelete={toDelete} handleShowModal={handleShowModal} changesData={changesData} />
            ))}

            <ModalNote showModal={showModal} setShowModal={setShowModal} setSelectedIndex={setSelectedIndex} todoList={todoList} setToDoList={setToDoList} changesData={changesData} setChangesData={setChangesData} displayedData={displayedData} selectedIndex={selectedIndex} setDisplayedData={setDisplayedData} />

        </div>
    );
};

export default NewNote