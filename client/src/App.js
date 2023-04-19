import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './component/home/Home';
import Detail from './component/datail/Detail';

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Home/:id' component={Detail}/>
          <Route exact path='/Home/:*' component={Detail}/>
        </Switch>
      </div>
    </BrowserRouter>



  );
}

export default App;
