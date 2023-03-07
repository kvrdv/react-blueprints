import './TodoListItem.scss';

export default function TodoListItem({label, important, done, onDeleted, onToggleImportant, onToggleDone}) {
  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }
  
  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames} >
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <div>
        <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
          <i className="bi bi-exclamation"></i>
        </button>

        <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </span>
  );
}