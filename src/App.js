
import Navbar from './Navbar';
import Home from './Home';

//this App function renders all of our nested/associated jsx compoennets to the ROOT dom element in index.js
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
    </div>
    </div>
  );
}

//always export the component for use elsewhere, here it is being used by index.js to render to ROOT
export default App;
