import './ThemeSwitcherNavbar.scss';
import reactLogo from '../../../src/images/reactjsLogo.png';
import reactLogoDark from '../../../src/images/reactjsLogoDark.png';

export default function ThemeSwitcherNavbar(props) {
    return (
        <nav 
            className={`theme-switcher-nav ${props.darkMode ? 'theme-switcher-nav__dark' : ''}`}>                   
            <div className="theme-switcher-nav--logo">
                <img 
                    src={props.darkMode ? reactLogoDark : reactLogo} alt="Logo" 
                    className="theme-switcher-nav--logo-img"
                />
                <h3 className={`theme-switcher-nav--logo-text ${props.darkMode ? 'theme-switcher-nav--logo-text__dark' : ''}`}>React facts</h3>
            </div>
            
            <div className="theme-switcher-nav--switcher">
                <p className={`theme-switcher-nav--switcher-light ${props.darkMode ? 'theme-switcher-nav--switcher-light__dark' : ''}`}>Light</p>
                <input 
                    className="theme-switcher-nav--switcher"
                    type="checkbox" 
                    id="switch" 
                    onClick={props.switchDarkMode}
                />
                <label htmlFor="switch">Toggle</label>                                           
                <p className={`theme-switcher-nav--switcher-dark ${props.darkMode ? 'theme-switcher-nav--switcher-dark__dark' : ''}`}>Dark</p>
            </div>
        </nav>
    );
}