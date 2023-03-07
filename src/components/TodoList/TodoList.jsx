import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

export default function TodoList({todos, onDeleted, onToggleImportant, onToggleDone}) {
  const elements = todos.map((item) => {
    const {label, important, done, id} = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          label={label} 
          important={important}
          done={done}
          onDeleted={() => onDeleted(id)} 
          onToggleImportant={() => onToggleImportant(id)} 
          onToggleDone={() => onToggleDone(id)} 
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}