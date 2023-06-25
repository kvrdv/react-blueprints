import {useState} from 'react';
import Navbar from '../Navbar';
import Theme from '../Theme';
import Todo from '../Todo';
import LogIn from '../../components/LogIn';
import Form from '../../components/Form';
import './app.scss';

export default function App() {
    const views = [
        {name: 'todo', label: 'Todo list', element: <Todo />},
        {name: 'theme', label: 'Theme switcher', element: <Theme />},
        {name: 'form', label: 'Form', element: <Form />},
        {name: 'login', label: 'Login', element: <LogIn />}
    ];

    const [activeNav, setActiveNav] = useState('todo');
    const [activeView, setActiveView] = useState(<Todo />);

    const onNavChange = (name) => {
        setActiveNav(name);
        const idx = views.findIndex((v) => v.name === name);
        setActiveView(views[idx].element);      
    }

    return(
        <div className="app">
            <Navbar 
                views={views}
                onNavChange={onNavChange}
                activeNav={activeNav}
            />
            {activeView}
        </div>
    )
}
