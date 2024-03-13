import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div className='bg-slate-200 mt-[16px] mb-[16px]'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;