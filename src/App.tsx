import './scss/Global.scss'
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header title="Mein Name ist Morrol" />
			<Counter button="Don't click me" message="Dont click me anymore! I hate it!!!" />
        </div>
    );
}

export default App;
