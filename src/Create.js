import { useState } from 'react';
//this allows us to use redirect hooks
import { useHistory } from 'react-router-dom';

const Create = () => {

    //watch the variable title for any changes
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Faith');
    //this is for the status bar when data is loading
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    //this makes the POST request
    const handleSubmit = (e) => {
        //this prevents the page from default refresshing
        e.preventDefault();
        const blog = { title, body, author };
        //see the blog obj in the console
        // console.log(blog);
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added");
            setIsPending(false);
            //this is using the history hook to redirect after the fetch to home or whatever route we put
            history.push('/');
            //this goes back 1 step to last page
            // history.go(-1);
        });
    };

    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit ={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    //starts as an empty string from above
                    value={title}
                    //this tracks the changing state of the title and updates it to what is typed
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Faith">Faith</option>
                    <option value="Daisy">Daisy</option>
                </select>
                {/* this adds a conditional button wheather blog is being submitted or is ready */}
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog Post...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;