import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmark}) => {
    return (
        <div className='w-1/3 bg-[#1111110D] rounded-[8px] mt-16'>
            <h3 className='text-3xl text-center pt-[30px] pb-[16px]'>Bookmarks: {bookmark.length}</h3>
            {
                bookmark.map((bookmark)=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmark:PropTypes.array
}
export default Bookmarks;