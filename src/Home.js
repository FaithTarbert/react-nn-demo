//a function that returns a jsx template element for use elsewhere, likely App.js
//sfc +tab creates a template (stands for stateless function component)
//useState is a reserve kw that we can use to tell react to watch a variable for any updates
import { useState } from 'react';


const Home = () => {
    //this is where we setup a react variable HOOK "USESTATE" that will be watched dynamically to be updated whenever changed
    //uses destructuring, must store in a variable to hold returned values
    //first parameter is your variable name used in return , can be anything, 2nd param is typically "setX", ususally whatever you called the first param
    //then the 2nd param is the variable name you call in your function below to update it
    const [name, setName] = useState('Faith');
    const [age, setAge] = useState('46');

    //handleClick is a common naming convention, you get access to the "event" info as 1st argument automatically, if you call it
    //this is an event listener with fixed content. Event info prints to the web console
    // let name = "Faith";
    const handleClick = (event) => {
        // console.log('hello, people', event);
        // name = "Daisy";
        setName('Daisy');
        setAge('1');
    };
    //2nd example passes dynamic content ie a name via a single line arrow function - must pass event in as 2nd argument
    //Event info prints to the web console
    // const handleClickAgain = (name, event) => {
    //     console.log('hello, people ' + name, event.target);
    // };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(event) => handleClickAgain("Faith", event)}>Click Me Again</button> */}
        </div>
     );
}

//always export the component for use elsewhere
export default Home;