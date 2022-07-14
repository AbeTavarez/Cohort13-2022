import './App.css';
import {Route, Switch} from 'react-router-dom'
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <div className="container">
      <h1>Todos Frontend</h1>

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
