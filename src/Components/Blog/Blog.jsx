
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark,handleMarksRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog
    return (
        <div className='mt-8 mb-[78px]'>
            <img className='w-full' src={cover}></img>

        <div className='flex justify-between mt-8'>

            <div className='flex gap-6 '>
                <img className='w-[60px] h-[60px]' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <p className='text-[16px] font-semibold text-[#11111199]'>{posted_date}</p>
                </div>
            </div>

            <div>
                <span className='text-xl font-medium text-[#11111199]'>{reading_time} min read </span>
                <button onClick={()=>handleBookmark(blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
            </div>

        </div>

            <h2 className="text-[40px] font-bold my-4 ">{title}</h2>
            <p>
            {
                hashtags.map((hash,idx)=><span className='text-[20px] font-medium' key={idx}><a href=''>#{hash}</a>  </span>)
            }
            </p>
            
            <button onClick={()=>handleMarksRead(id,reading_time)} className='text-[#6047EC] text-xl font-semibold underline'> Marks as read</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func,
    handleMarksRead:PropTypes.func
}

export default Blog;