import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import { Menu, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom'

function Header(props){
    const { signOut, isAuth } = props
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/user-orders">Мои заказы</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/user-fav">Мои избранные</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" onClick={() => signOut(props.history)}>Выход</Menu.Item>
        </Menu>
    )
    const menuAuth = (
        <Menu>
            <Menu.Item key="0">
                <Link to="/signin">Войти</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/signup">Регистрация</Link>
            </Menu.Item>
        </Menu>
    )
    return (
        <header className="header">
            <div className="header-top">
                <div className="left-nav">
                    <div className="logo">
                        <img src="/images/logo.svg" alt="restoran" />
                    </div>
                    <div className="nav-button">
                        <button className="nav-btn">Алматы</button>
                    </div>
                </div>
                <div className="right-nav">
                    <img className="nav-img" src="/images/instagram.svg" alt="instagram" />
                    <img className="nav-img" src="/images/heart.svg" alt="heart" />
                    <img className="nav-img" src="/images/search.svg" alt="search" />
                    <Dropdown overlay={isAuth ? menu : menuAuth} trigger={['click']}>
                        <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <img className="nav-img" src="/images/user.svg" alt="user" />
                        </Link>
                    </Dropdown>
                    <img className="nav-img" src="/images/bars.svg" alt="bars" />
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-nav__special">
                    <Link to="#" className="circle">
                        <div className="sale-mark first">
                            <span>
                                <img className="sale-mark-img" alt="Доставка еды" src="/images/deliver.svg" />
                            </span>
                            <p className="sale-mark-text">Доставка<br />еды</p>
                        </div>
                    </Link>
                    <Link to="#" className="circle">
                        <div className="sale-mark second">
                            <span>
                                <img className="sale-mark-img" alt="Бронь столиков" src="/images/booking.svg" />
                            </span>
                            <p className="sale-mark-text">Бронь<br />столиков</p>
                        </div>
                    </Link>
                </div>
                <div className="header-nav_btns">
                    <Link to="#" className="header-nav_btns_item">
                        <img className="header-nav_btns_item_shapka" src="/images/shapka.svg" alt="shapka" />
                        Новогодние корпоративы в Алматы 2021-2022
                    </Link>
                    <Link to="#" className="header-nav_btns_item">Банкетные залы</Link>
                    <Link to="/restaurant" className="header-nav_btns_item">Рестораны</Link>
                    <Link to="#" className="header-nav_btns_item">Караоке</Link>
                    <Link to="#" className="header-nav_btns_item">Пабы, бары</Link>
                    <Link to="#" className="header-nav_btns_item">Кафе</Link>
                    <Link to="#" className="header-nav_btns_item">Кофейни</Link>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)