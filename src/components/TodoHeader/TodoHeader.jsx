import './todoHeader.scss';

export default function TodoHeader({todo, done}) {
    return (
        <div className="todo-header d-flex">
            <h1 className="todo-header__name">
                Todo
            </h1>

            <h2 className="todo-header__counter">
                {todo} more to do, {done} done
            </h2>
        </div>
    );
};
