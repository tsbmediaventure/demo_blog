import React, { useState } from 'react';
import style from './header.module.scss';
import logo from '../../assets/conscentLogo.png';
import { Link} from 'react-router-dom';

const Header = (props: any) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className={style['header']} style={{ backgroundColor: props.headerColor }}>
        <Link to="/">
          <img src={logo} alt="logo" className={style['logo-img']} />
        </Link>
        <ul className={click ? style['nav-options-active'] : style['nav-options']}>
          <li className={style['option']} onClick={closeMobileMenu}>
            <p>POLITICS</p>
          </li>
          <li className={style['option']} onClick={closeMobileMenu}>
            <p>BUSINESS</p>
          </li>
          <li className={style['option']} onClick={closeMobileMenu}>
            <p>CULTURE</p>
          </li>
          <li className={style['option']} onClick={closeMobileMenu}>
            <p>INTERNATIONAL</p>
          </li>
        </ul>
        <div className={style['mobile-menu']} onClick={handleClick}>
          {click ? (
            <div className={style['menu-icon']}>&#10005;</div>
          ) : (
            <div className={style['menu-icon']}>&#9776;</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
