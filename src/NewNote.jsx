import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewItem from './NewItem';



const NewNote = ({ todoList, setToDoList }) =>{
    const [showModal, setShowModal] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const [displayedData, setDisplayedData] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(null);

    const toDelete = (index) => {
        const newList = todoList.filter((_, i) => i !== index);
        setToDoList(newList);
    };

    const handleShowModal = (item, index) => {
        setDisplayedText(item.text);
        setDisplayedData(item.created);
        setShowModal(true);
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedIndex(null);
    };

    return (
    <div className="noteDiv">
        {todoList.map((item, index) => (
            <NewItem key={index} item={item} index={index} toDelete={toDelete} handleShowModal={handleShowModal} />
        ))}

        <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header>
                    <Modal.Title><b><i>Title:</i> {todoList[selectedIndex]?.title}</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <pre><b><i>My note:</i></b> {displayedText}</pre>
                    <p><i>Created: {displayedData}</i></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
        </Modal>
    </div>
    );
};

export default NewNote