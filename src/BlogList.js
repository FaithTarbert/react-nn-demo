import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    //these are moved into the obj parameters above for prop, works the same
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written By { blog.author}</p>
            </Link>
            {/* this is the code if we want a delete button:
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
            </div>  
        ))}
        </div>
     );
}
 
export default BlogList;