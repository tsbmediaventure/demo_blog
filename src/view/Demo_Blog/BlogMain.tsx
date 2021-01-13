import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SubBlogSmall from './SubBlogSmall';
import SubBlogLarge from './SubBlogLarge';
import LastBlog from './LastBlog';
import { data } from './DemoData';
import style from './blogMain.module.scss';
import topImg from '../../assets/blog/Story/Humanoid.jpg';

const Blog = () => {
  const [color, setColor] = useState('');
  const listenScrollEvent = () => {
    if (window.scrollY > 90) {
      setColor('#fff');
    } else {
      setColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <div className={style['header-wrap']}>
        <Header headerColor={color} />
      </div>
      <Link to="/article">
        <img src={topImg} alt="topImg" className={style['top-img']} />
        <div className={style['top-img-content']}>
          <p className={style['article-link']}>
            <u style={{ textUnderlinePosition: 'under' }}>THE BIG </u>STORY
          </p>
          <p className={style['top-img-title']}>The rise of the humanoids, a new era for tech</p>
          <p className={style['top-img-subtitle']}>
            More and more startups are looking at building AI-enabled humanoids, but it’s too early to know the future
            of these machine-enabled beings
          </p>
          <p className={style['top-img-name']}>Sunny Sen</p>
          <p className={style['top-img-date']}>January 01,2021</p>
        </div>
      </Link>
      <div className={style['second-part']}>
        <p className={style['article-link']}>TOP STORIES</p>
        <div className={style['second-part-content']}>
          {data.map((data, index) => (
            <>{index === 2 || index === 5 ? <SubBlogLarge passData={data} /> : <SubBlogSmall passData={data} />}</>
          ))}
        </div>
        <LastBlog />
      </div>
    </>
  );
};

export default Blog;
