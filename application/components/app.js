import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import { Switch, Route } from 'react-router-dom';


const App = () => {
    
        return (
            <div>
                <h1>My React App2</h1>
                <Route exact path="/" component={Home} />
                <Switch>                    
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        )
    
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));