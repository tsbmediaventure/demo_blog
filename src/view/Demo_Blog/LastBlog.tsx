import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './subBlogSmall.module.scss';
const LastBlog = (props: any) => {
  const data = props.passData;
  const history = useHistory();
  const onClick = () => {
    window.scrollTo(0, 0);
    history.push({
      pathname: `/${data.id}`,
      state: data,
    });
  };
  return (
    <div className={style['last-blog']} key={data.id} onClick={onClick}>
      <div className={style['last-blog-img']}>
        <img src={data.img} alt="whiskey" />
      </div>
      <div className={style['last-blog-text']}>
        <p className={style['left-blog-title']}>{data.title}</p>
        <p className={style['left-blog-subtitle']}>{data.subTitle}</p>
        <div className={style['name-date']}>
          <p>{data.name}</p>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;
