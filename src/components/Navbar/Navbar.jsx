import './navbar.scss';

export default function Navbar({views, onNavChange, activeNav}) {   
    const nav = views.map(({name, label}) => {
        let classNames = 'nav-link navbar__label';      
        if (activeNav === name) {
            classNames += ' active'
        }   
        return (
            <span className={classNames} 
                key={name} 
                onClick={() => onNavChange(name)}
            >
                {label}
            </span>
        );
    });

    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <div className="collapse show" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {nav}
                    </div>
                </div>
            </div>
        </nav>
    );
}
