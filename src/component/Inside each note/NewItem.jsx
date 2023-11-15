import React from 'react';
import DeleteButton from '../Delete Button/DeleteButton';

const NewItem = ({ item, index, toDelete, handleShowModal })=> {
  const showChanges = item.changesData !== undefined && item.changesData !== null;

  return(
    <>
    <div key={index} onClick={()=>handleShowModal(item,index)}>
      <b><i>Title:</i> {item.title}</b>
      <pre><b><i>My note: </i></b>{item.text}</pre>
      <p><i>Created: {item.created}</i></p>
      {showChanges && <p><i>Changed: {item.changesData}</i></p>}
      <DeleteButton toDelete={toDelete} index={index}/>
    </div> 
    </>);
}
  export default NewItem;