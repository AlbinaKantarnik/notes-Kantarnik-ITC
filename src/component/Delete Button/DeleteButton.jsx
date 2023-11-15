import React from 'react';

const DeleteButton = ({ toDelete, index }) => {

    const deleteItem = (e) => {
        const confirmDelete = window.confirm('Are you sure you want to delete your note?');
        if (confirmDelete) {
            toDelete(index, e);
            e.stopPropagation();
        }
    };

    return (
        <>
            <button onClick={deleteItem}>Delete</button>
        </>
    )

};
export default DeleteButton;