import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './component/home/Home';
import Detail from './component/datail/Detail';
import LandingPage from './component/landingPage/LandingPage';
import Spinner from './component/video/Spinner';
import ActivitisCreate from './component/activitis/activityCreation/ActivitisCreate';
import ActivityList from './component/activitis/activityList/ActivityList';

function App() {
  return (

    
    <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Home/:id' component={Detail}/>
          <Route exact path='/Home/:*' component={Detail} />
          <Route exact path='/Activity' component={ActivitisCreate} />
          <Route exact path='/Activities' component={ActivityList}/>
        </Switch>
      </div>
  );
}

export default App;



  
       





