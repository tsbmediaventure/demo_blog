import React from 'react'
import Header from './Header'
import style from './blogMain.module.scss'
import topImg from '../../assets/blog/Story/Humanoid.jpg'

const Blog = () =>{
    return(
        <div>
        <Header/>
        <img src={topImg} alt ="topImg" className={style['top-img']}/>
        <div className={style['top-img-content']}>
        <p className={style['article-link']}>THE BIG STORY</p>
        <p className={style['top-img-title']}>The rise of the <br/>humanoids, a new era <br/>for tech</p>
        <p className={style['top-img-subtitle']}>More and more startups are looking at building AI-enabled humanoids, 
            but it’s too early to know the future of these machine-enabled beings</p>
        </div>
        </div>
    );
}

export default Blog;

