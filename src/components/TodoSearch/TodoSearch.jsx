import {useState} from 'react';
import './todoSearch.scss';

export default function TodoSearch({onSearchChange}) {
    const [term, setTerm] = useState('');

    function onSearchPanelChange(event) {
        setTerm(event.target.value);
        onSearchChange(term);
    }

    return <input 
        className="todo-search__input" 
        placeholder="search" 
        value={term} 
        onChange={onSearchPanelChange} 
    />   
}
