import AppTodoList from '../../components/AppTodoList/AppTodoList';
import AppForm from '../../components/AppForm/AppForm';
import AppLogIn from '../../components/AppLogIn/AppLogIn';
import AppThemeSwitcher from '../../components/AppThemeSwitcher/AppThemeSwitcher';
import './App.scss';

export default function App() {
    return(
        <div className="main--wrapper">
            <AppTodoList />
            <AppForm />
            <AppLogIn />
            <AppThemeSwitcher />
        </div>
    )
}