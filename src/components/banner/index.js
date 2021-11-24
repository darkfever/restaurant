import React from "react";
import { Link } from "react-router-dom";
import "../banner/banner.css";

function Banner() {
    return (
        <div className="banner">
            <div className="enroll-landing-banner">
                <div className="banner-text">Мы – крупнейший сервис бронирования столиков и заказа банкетов в Казахстане</div>
                <div className="banner-content">
                    <div className="banner-content-item">
                        <div className="banner-content-item-head">Гостям</div>
                        <p>Бронируйте столики онлайн или по телефону в лучших заведениях Алматы. Это самый удобный и надёжный способ!</p>
                        <Link to="#" className="banner-button">Выбрать лучший ресторан</Link>
                    </div>
                    <div className="banner-content-item">
                        <div className="banner-content-item-head">Заведениям</div>
                        <p>Подключайтесь к службе бронирования столиков и встречайте гостей! Мы заботимся о росте вашей выручки, а не расходов.</p>
                        <Link to="#" className="banner-button">Подключиться бесплатно</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner