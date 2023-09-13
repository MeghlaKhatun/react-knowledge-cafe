import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmark,marksRead}) => {
    
    return (
        <div className='w-1/3 mt-16 mb-4'>
            <div className='bg-purple-100  rounded-[8px] mb-[45px]'>
                <h3 className='text-2xl font-bold text-[#6047EC] text-center py-[21px] px-[50px]'>Spent time on read : {marksRead} min</h3>
            </div>
        <div className=' bg-[#1111110D] rounded-[8px] pb-4 '>
            
            <h3 className='text-3xl text-center pt-[30px] pb-[16px]'>Bookmarks: {bookmark.length}</h3>
            {
                bookmark.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmark:PropTypes.array,
    marksRead:PropTypes.number
}
export default Bookmarks;