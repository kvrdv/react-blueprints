export default function TodoFilter({filter, onFilterChange}) {
    const elements = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    const buttons = elements.map(({name, label}) => {
        const isActive = filter === name; // maybe not strict compare
        const classNames = isActive ? 'btn-info' : 'btn-outline-secondary';

        return (
            <button 
                className={`btn ${classNames}`} 
                type="button"             
                key={name} 
                onClick={() => onFilterChange(name)}
            >
                {label}
            </button>
        );
    });

    return <div className="btn-group">{buttons}</div>;
}
