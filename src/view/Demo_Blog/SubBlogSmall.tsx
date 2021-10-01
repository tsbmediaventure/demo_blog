import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './subBlogSmall.module.scss';
const SubBlogSmall = (props: any) => {
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
    <div className={style['left-blog']} key={data.id} onClick={onClick}>
      <img src={data.img} alt="shutterstock" className={style['left-blog-img']} />
      <div className={style['left-blog-text']}>
        <p className={style['left-blog-title']}>{data.title} </p>
        <p className={style['left-blog-subtitle']}>{data.subTitle}</p>
        <div className={style['name-date']}>
          <p>{data.name}</p>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default SubBlogSmall;
