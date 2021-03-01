
//it is understood that what is in the BlogList obj is a prop ie prop.blogs and prop.title
const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
        <h2>{ title }</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p>Written By { blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
            </div>  
        ))}
        </div>
     );
}
 
export default BlogList;