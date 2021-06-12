import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Router, Route, Link} from 'react-router-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Signin from './screens/Signin';

function App() {
  return (
      <BrowserRouter>
          <Provider store={store()}>
            <div className="App">
              <Switch>
                <Route exact path="/"><Home /></Route>  
                <Route exact path="/signup"><Signup /></Route>
                <Route exact path="/signin"><Signin /> </Route>
              </Switch>
            </div>
        </Provider>
      </BrowserRouter>

  );
}

export default App;
