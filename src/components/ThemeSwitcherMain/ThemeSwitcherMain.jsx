import reactjsIcon from '../../images/reactjsIcon.png';
import reactjsIconDark from '../../images/reactjsIconDark.png';
import './ThemeSwitcherMain.scss';

export default function ThemeSwitcherMain(props) {
    return (
        <div className={`theme-switcher-main ${props.darkMode ? 'theme-switcher-main__dark' : ''}`}>
            <h1 className="theme-switcher-main--header">Facts about React</h1>
            <ul className={`theme-switcher-main--list ${props.darkMode ? 'theme-switcher-main--list__dark' : ''}`}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img 
                src={props.darkMode ? reactjsIconDark : reactjsIcon} 
                alt="React Icon" 
                className="theme-switcher-main--bgimage"
            />
        </div>
    );
}