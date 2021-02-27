//a function that returns a jsx template element for use elsewhere, likely App.js
//sfc +tab creates a template (stands for stateless function component)
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>The Dogo Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            {/* use double curly brackets and key/value pairs to do INLINE STYLING taken from index.css styling like this:
            <a href="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'
            }}>New Blog</a> */}
            <a href="/create">New Blog</a>
        </div>
        </nav>
     );
}

//always export the component for use elsewhere
export default Navbar;