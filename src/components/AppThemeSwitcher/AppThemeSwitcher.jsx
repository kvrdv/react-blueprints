import {useState} from 'react';
import ThemeSwitcherNavbar from '../../components/ThemeSwitcherNavbar/ThemeSwitcherNavbar';
import ThemeSwitcherMain from '../../components/ThemeSwitcherMain/ThemeSwitcherMain';
import './AppThemeSwitcher.scss';

export default function AppThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    function switchDarkMode() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={`theme-switcher-wrapper ${darkMode ? 'theme-switcher-wrapper__dark' : ''}`}>
            <ThemeSwitcherNavbar 
                darkMode={darkMode} 
                switchDarkMode={switchDarkMode}
            />
            <ThemeSwitcherMain 
                darkMode={darkMode}
                switchDarkMode={switchDarkMode}
            />
        </div>
    );
}

