import React from 'react';
import DeleteButton from './DeleteButton';

const NewItem = ({ item, index, toDelete }) => (
    <div key={index}>
      <p>My note: {item.text}</p>
      <p>Created: {item.created}</p>
      <DeleteButton toDelete={toDelete} index={index}/>
    </div>

  );

  export default NewItem;