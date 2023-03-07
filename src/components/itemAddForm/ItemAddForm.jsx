import {useState} from 'react';
import "./ItemAddForm.scss"

export default function ItemAddForm({onItemAdded}) {
  const [label, setLabel] = useState('');

  function onLabelChange(event) {
    setLabel(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    onItemAdded(label);
    setLabel('');
  }

  return(   
    <form className="item-add-form d-flex" onSubmit={onSubmit}>
      <input type="text" className="form-control" onChange={onLabelChange} value={label} placeholder="What needs to be done" />
      <button className="btn btn-outline-secondary">Add</button>
    </form>  
  );
}