//a function that returns a jsx template element for use elsewhere, likely App.js
//sfc +tab creates a template (stands for stateless function component)
//useState is a HOOK reserve kw that we can use to tell react to watch a variable for any updates
// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    //this is where we setup a react variable HOOK "USESTATE" that will be watched dynamically to be updated whenever changed
    //uses destructuring, must store in a variable to hold returned values
    //first parameter is your variable name used in return , can be anything, 2nd param is typically "setX", ususally whatever you called the first param
    //then the 2nd param is the variable name you call in your function below to update it
    // const [name, setName] = useState('Faith');
    // const [age, setAge] = useState('46');

    //handleClick is a common naming convention, you get access to the "event" info as 1st argument automatically, if you call it
    //this is an event listener with fixed content. Event info prints to the web console
    // let name = "Faith";
    // const handleClick = (event) => {
        // console.log('hello, people', event);
        // name = "Daisy";
        // setName('Daisy');
        // setAge('1');
    // };

    //2nd example passes dynamic content ie a name via a single line arrow function - must pass event in as 2nd argument
    //Event info prints to the web console
    // const handleClickAgain = (name, event) => {
    //     console.log('hello, people ' + name, event.target);
    // };

    //3rd example uses an array of objects with IDs...
    // const [blogs, setBlogs] = useState(null);

    // const [name, setName] = useState('Faith');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    //useEffect fires every time the page loads or something re-renders, passing an empty array makes it only fire when the page first loads. Adding a param(s) to the array makes the function only fire when that element(s) updates, called a dependency
    return (
        <div className="home">
            {/* <h2>Homepage</h2>
            
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            {/* <button onClick={(event) => handleClickAgain("Faith", event)}>Click Me Again</button> */}
            {/* filter returns a new array with only the items that return as true */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Faith")} title="Faith's Blogs!"/> */}
            {/* <button onClick={() => setName('Nathan')}>Change Name</button>
            <p>{ name }</p> */}
        </div>
     );
}

//always export the component for use elsewhere
export default Home;