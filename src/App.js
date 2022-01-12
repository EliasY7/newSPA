import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar />
        <div className = "content">
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path = "/shop">
              <Shop />
            </Route>
            <Route path = "/items/:id">
              <ItemDetails />
            </Route>
            <Route path = "*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App; 
