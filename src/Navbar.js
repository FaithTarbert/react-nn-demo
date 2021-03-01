//a function that returns a jsx template element for use elsewhere, likely App.js
//sfc +tab creates a template (stands for stateless function component)

import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>The Dogo Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            {/* use double curly brackets and key/value pairs to do INLINE STYLING taken from index.css styling like this:
            <a href="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'
            }}>New Blog</a> */}
            <Link to="/create">New Blog</Link>
        </div>
        </nav>
     );
}

//always export the component for use elsewhere
export default Navbar;