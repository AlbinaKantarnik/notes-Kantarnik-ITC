import React from 'react';
import DeleteButton from './DeleteButton';

const NewItem = ({ item, index, toDelete }) => (
    <div key={index}>
        <b><i>Title:</i> {item.title}</b>
      <p><b><i>My note:</i></b> {item.text}</p>
      <p><i>Created: {item.created}</i></p>
      <DeleteButton toDelete={toDelete} index={index}/>
    </div>

  );

  export default NewItem;