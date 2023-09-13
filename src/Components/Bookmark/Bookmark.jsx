import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
       
        <div  className="p-7 m-4 bg-white rounded-[8px]">
            <h3 className='text-[18px] font-semibold'>{title}</h3>
        </div>
        
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;