import React from 'react';
import style from './subBlogLarge.module.scss';
const SubBlogLarge = (props: any) => {
  const data = props.passData;
  return (
    <div className={style['large-blog']} key={data.id}>
      <img src={data.img} alt="tvChannels" className={style['img']} />
      <div className={style['overlay']}>
        <div className={style['wrap-content']}>
          <p className={style['title']}>{data.title}</p>
          <p className={style['sub-title']}>{data.subTitle}</p>
          <div className={style['wrap-name-date']}>
            <p className={style['name']}>{data.name}</p>
            <p className={style['date']}>{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBlogLarge;
