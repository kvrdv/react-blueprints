import {useState} from 'react';
import "./todoAdd.scss"

export default function TodoAdd({onItemAdded}) {
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
        <form className="item-add d-flex" onSubmit={onSubmit}>
            <input 
                className="item-add_form form-control" 
                type="text"                
                onChange={onLabelChange} 
                value={label} 
                placeholder="What needs to be done" 
            />

            <button className="btn btn-outline-secondary">
                Add
            </button>
        </form>  
    );
}
