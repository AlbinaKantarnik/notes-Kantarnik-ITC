import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import InputNote from '../Input Note/InputNote';
import './ModalNote.css'

export default function ModalNote({ showModal, setShowModal, todoList, setToDoList, changesData, setChangesData, displayedData, setSelectedIndex, selectedIndex, setDisplayedData})  {
    const [editedTitle, setEditedTitle] = useState('');
    const [editedText, setEditedText] = useState('');
    const [changesMade, setChangesMade] = useState(false);
    const [localChangesData, setLocalChangesData] = useState('');

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedIndex(null);
        setChangesMade(false);
        setLocalChangesData('');
    };

    const handleSaveChanges = () => {
        const updatedTodoList = [...todoList];
        const selectedItem = updatedTodoList[selectedIndex];

        if (editedTitle !== null) {
            selectedItem.title = editedTitle;
        }
        if (editedText !== null) {
            selectedItem.text = editedText;
        }

        if (changesMade) {
            const newChangesData = moment().format('MMM Do h:mm A');
            setLocalChangesData(newChangesData);
            selectedItem.changesData = newChangesData;
            setChangesData(newChangesData);
            setDisplayedData(newChangesData);
        }
        setToDoList(updatedTodoList);
        handleCloseModal();
    };
   
    useEffect(() => {
        if (showModal && selectedIndex !== null && todoList[selectedIndex]) {
            setEditedTitle(todoList[selectedIndex]?.title || '');
            setEditedText(todoList[selectedIndex]?.text || '');
            const currentChangesData = todoList[selectedIndex]?.changesData;
            setLocalChangesData(currentChangesData || ''); 
        }
    }, [showModal, selectedIndex, todoList]);
    
    useEffect(() => {
        if (changesData !== localChangesData) {
            setChangesMade(true);
        }
    }, [changesData, localChangesData]);

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
                <Modal.Title></Modal.Title>
                <img
                    src="./xmark-solid.svg"
                    alt="Delete"
                    onClick={handleCloseModal}
                />
            </Modal.Header>
            <Modal.Body>
                <InputNote
                    title={editedTitle || todoList[selectedIndex]?.title} setTitle={setEditedTitle}
                    inputValue={editedText || todoList[selectedIndex]?.text}
                    setInputValue={setEditedText} 
                    setChangesMade={() => setChangesMade(true)} />
                <p><i>Created: {displayedData}</i></p>
                {changesMade && <p><i>Last Modified: {localChangesData}</i></p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}