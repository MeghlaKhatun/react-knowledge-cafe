import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmark,handleMarksRead}) => {

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
                     handleBookmark={handleBookmark}
                     handleMarksRead=
                     {handleMarksRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmark:PropTypes.func,
    handleMarksRead:PropTypes.func
}

export default Blogs;