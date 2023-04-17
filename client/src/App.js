import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './component/home/Home';

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/Home' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>



  );
}

export default App;
