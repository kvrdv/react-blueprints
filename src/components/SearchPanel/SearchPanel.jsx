import {useState} from 'react';
import './SearchPanel.scss';

export default function SearchPanel({onSearchChange}) {
  const [term, setTerm] = useState('');

  function onSearchPanelChange(event) {
    setTerm(event.target.value);
    onSearchChange(term);
  }

  return <input className="search-input" placeholder="search" value={term} onChange={onSearchPanelChange} />;
}
