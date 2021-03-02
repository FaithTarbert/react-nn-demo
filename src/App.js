
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NoFound';

//this App function renders all of our nested/associated jsx compoennets to the ROOT dom element in index.js
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

//always export the component for use elsewhere, here it is being used by index.js to render to ROOT
export default App;
