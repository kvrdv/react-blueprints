import TodoItem from '../TodoItem';
import './todoList.scss';

export default function TodoList({todos, onDeleted, onToggleImportant, onToggleDone}) {
    const elements = todos.map(item => {
        const {label, important, done, id} = item;

        return (
            <li key={id} className="todo-list__item">
                <TodoItem 
                    label={label} 
                    important={important} 
                    done={done} 
                    onDeleted={() => onDeleted(id)} 
                    onToggleImportant={() => onToggleImportant(id)} 
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        );
    });

    return <ul>{elements}</ul>;
}