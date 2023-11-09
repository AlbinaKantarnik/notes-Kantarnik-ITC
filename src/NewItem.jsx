import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteButton from './DeleteButton';

const NewItem = ({ item, index, toDelete, handleShowModal })=> {
  // const handleDelete = (event) => {event.stopPropagation()};
  // }
  return(
    <>
    <div key={index} onClick={()=>handleShowModal(item,index)}>
      <b><i>Title:</i> {item.title}</b>
      <pre><b><i>My note: </i></b>{item.text}</pre>
      <p><i>Created: {item.created}</i></p>
      <DeleteButton toDelete={toDelete} index={index}/>
    </div> 
    </>);
}
  export default NewItem;