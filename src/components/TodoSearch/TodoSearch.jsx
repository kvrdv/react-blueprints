import {useState} from 'react';
import './todoSearch.scss';

export default function TodoSearch({onSearchChange}) {
    const [term, setTerm] = useState('');

    const onTodoSearchChange = (event) => {
        const filterValue = event.target.value;
        setTerm(filterValue);
        onSearchChange(filterValue);
    }

    return <input 
        type="text"
        className="todo-search__input form-control" 
        placeholder="Search" 
        value={term} 
        onChange={onTodoSearchChange} 
    />   
}
