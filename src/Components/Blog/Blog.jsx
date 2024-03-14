import PropTypes from 'prop-types';
import 'boxicons'

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-[40px]'>
            <img className="w-[845px]" src={cover} alt={`Cover Picture of the title: ${title}`} />
            <div className='flex justify-between mt-[32px] mb-[16px]'>
                <div className='flex gap-[24px] items-center'>
                    <img className='w-[60px] h-[60px]' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>Name: {author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <span>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)}><box-icon name='bookmark'></box-icon></button>
                </div>
            </div>
            <h2 className="text-4xl mb-[16px]">{title}</h2>
            <p className='mb-[16px]'>
                {
                    hashtags.map((hash, index) => <span key={index}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button 
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='mb-[32px]'
            >Mark As Read</button>
            <hr className='mb-[40px]'/>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;