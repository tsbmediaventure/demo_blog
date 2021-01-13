import React from 'react';
import style from './header.module.scss';
import logo from '../../assets/conscentLogo.png';

const Header = (props: any) => {
  return (
      <div className={style['header']} style={{backgroundColor: props.headerColor}}>
        <div className={style['logo']}>
          <img src={logo} alt="logo" className={style['logo-img']} />
        </div>
        <div className={style['menu-items-main']}>
          <p className={style['menu-item']}>POLITICS</p>
          <p className={style['menu-item']}>BUSINESS</p>
          <p className={style['menu-item']}>CULTURE</p>
          <p className={style['menu-item']}>INTERNATIONAL</p>
        </div>
      </div>
  );
};

export default Header;
