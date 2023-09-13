import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmark}) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    console.log(blogs)

    return (
        <div className="w-2/3 text-4xl">
            <h2>Blogs: {blogs.length} </h2>
            {
                blogs.map(blog=> <Blog key={blog.id}
                     blog={blog}
                     handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    );
};

export default Blogs;