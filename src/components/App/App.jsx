import AppTodoList from '../../components/AppTodoList/AppTodoList';
import AppForm from '../../components/AppForm/AppForm';
import './App.scss';

export default function App() {
    return(
        <section className="main--wrapper">
            <AppTodoList/>
            <AppForm/>
        </section>
    )
}