import './todoItem.scss';

export default function TodoItem({label, important, done, onDeleted, onToggleImportant, onToggleDone}) {
    let classNames = 'todo-item';

    if (done) {
        classNames += ' todo-item_done';
    }

    if (important) {
        classNames += ' todo-item_important';
    }

    return (
        <span className={classNames}>
            <span 
                className="todo-item__label" 
                onClick={onToggleDone}
            >
                {label}
            </span>

            <div>
                <button 
                    className="todo-item__button btn btn-outline-success btn-sm" 
                    type="button"                    
                    onClick={onToggleImportant}
                >
                    <i className="bi bi-exclamation"></i>
                </button>

                <button 
                    className="todo-item__button btn btn-outline-danger btn-sm" 
                    type="button"                    
                    onClick={onDeleted}
                >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </span>
    );
}
