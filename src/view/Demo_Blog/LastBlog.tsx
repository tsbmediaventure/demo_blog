import React from 'react';
import style from './subBlogSmall.module.scss';
import whiskey from '../../assets/blog/Whiskey.jpeg';
const LastBlog = () => {
  return (
    <div className={style['last-blog']}>
      <div className={style['last-blog-img']}>
        <img src={whiskey} alt="whiskey" />
      </div>
      <div className={style['last-blog-text']}>
        <p className={style['left-blog-title']}>Cheers to `new-age` whisky, spiked with butterscotch, tea and more</p>
        <p className={style['left-blog-subtitle']}>
          Leading brands are hoping to break the old school imagery of whisky in their bid to attract non-conventional
          whisky drinkers.
        </p>
        <div className={style['name-date']}>
          <p>Trisha Mukherjee</p>
          <p>January 08, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;
