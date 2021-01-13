import React from 'react';
import Header from './Header';
import style from './blogMain.module.scss';
import topImg from '../../assets/blog/Story/Humanoid.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <Link to="/article">
      <div className={style['main']}>
        <div className={style['header-wrap']}>
        <Header/>
        </div>

        <img src={topImg} alt="topImg" className={style['top-img']} />
        <div className={style['top-img-content']}>
          <p className={style['article-link']}>
            <u>THE BIG </u>STORY
          </p>
          <p className={style['top-img-title']}>
            The rise of the <br />
            humanoids, a new era <br />
            for tech
          </p>
          <p className={style['top-img-subtitle']}>
            More and more startups are looking at building
            <br />
            AI-enabled humanoids, but it’s too early to know <br />
            the future of these machine-enabled beings
          </p>
          <p className={style['top-img-name']}>Sunny Sen</p>
          <p className={style['top-img-date']}>January 01,2021</p>
        </div>
      </div>
    </Link>
  );
};

export default Blog;
