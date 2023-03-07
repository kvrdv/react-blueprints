import {useState} from 'react';
import TodoListHeader from '../TodoListHeader/TodoListHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemAddForm from '../ItemAddForm/ItemAddForm';
import './AppTodoList.scss';

export default function AppTodoList() { 
  const [todoData, setTodoData] = useState([
    createTodoItem('Dont eat'),
    createTodoItem('Dont sleep'),
    createTodoItem('Look good'),
    createTodoItem('Dont speak')
  ]);

  const [term, setTerm] = useState('');

  const [filter, setFilter] = useState('all');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  function createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: getRandomInt(0, 1000000)
    }
  }

  function deleteItem(id) {
    setTodoData(() => {
      const index = todoData.findIndex((element) => element.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return newData;
    });
  }

  function addItem(text) {
    const newItem = createTodoItem(text);
    setTodoData(() => {
      const newData = [
        ...todoData, newItem
      ];
      return newData;
    });   
  }

  function onToggleImportant(id) {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, important: !oldItem.important};
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
      return newData;
    });
  }

  function onToggleDone(id) {
    setTodoData(() => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];
      return newData;
    });
  }

  function onSearchChange(term) {
    setTerm(term);
  }

  function onFilterChange(filter) {
    setFilter(filter);
  }

  function search(items, term) {
    if (term.length === 0) {
      return items;
    }   

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  function filtering(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':  
         return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  const visibleItems = filtering(search(todoData, term), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="todo-app">
      <TodoListHeader todo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
      </div>
      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
}