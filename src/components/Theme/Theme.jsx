import {useState} from 'react';
import reactLogo from './images/reactjsLogo.png';
import reactjsIcon from './images/reactjsIcon.png';
import reactLogoDark from './images/reactjsLogoDark.png';
import reactjsIconDark from './images/reactjsIconDark.png';
import './theme.scss';

export default function ThemeSwitcherMain() {
    const [darkMode, setDarkMode] = useState(false);

    function switchDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`theme ${darkMode ? 'theme_dark' : ''}`}>
            <div className="theme__switcher">
                <p className={`theme__switcher ${darkMode ? 'theme__switcher_dark' : ''}`}>Light</p>
                
                <input 
                    className="theme__switcher"
                    type="checkbox" 
                    id="switch" 
                    onClick={switchDarkMode}
                />

                <label htmlFor="switch">Toggle</label>                                           
                <p className={`theme__switcher ${darkMode ? 'theme__switcher_dark' : ''}`}>Dark</p>
            </div>

            <h1 className={`theme__header ${darkMode ? 'theme__header_dark' : ''}`}>
                Facts about React:
            </h1>

            <div className={`theme__content ${darkMode ? 'theme__content_dark' : ''}`}>              
                <ul className={`theme__list ${darkMode ? 'theme__list_dark' : ''}`}>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                    <li>And more...</li>
                </ul>

                <img 
                    className="theme__bg-image"
                    src={darkMode ? reactjsIconDark : reactjsIcon} 
                    alt="React Icon"       
                />
            </div>

            <img 
                className="theme__logo"
                src={darkMode ? reactLogoDark : reactLogo} 
                alt="Logo"    
            />
        </div>
    );
}
