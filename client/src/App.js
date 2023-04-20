import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './component/home/Home';
import Detail from './component/datail/Detail';
import LandingPage from './component/landingPage/LandingPage';

function App() {
  return (

    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Home/:id' component={Detail}/>
          <Route exact path='/Home/:*' component={Detail}/>
        </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;



  
       





