import React from 'react';

const DeleteButton = ({ toDelete, index }) => {

    const deleteItem = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete your note?');
        if (confirmDelete) {
            toDelete(index);
        }
    };

    return (
        <>
            <button onClick={deleteItem}>Delete</button>
        </>
    )

};
export default DeleteButton;