import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Counter from "./Pages/Counter";
import IncreaseCounter from "./Pages/IncreaseCounter";
import IncreaseByTwoCounter from "./Pages/IncreaseByTwoCounter";
import DecreaseCounter from "./Pages/DecreaseCounter";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <br/>
                    <Counter/>
                    <div className="d-flex gap-2">
                        <IncreaseCounter/>
                        <DecreaseCounter/>
                        <IncreaseByTwoCounter/>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;