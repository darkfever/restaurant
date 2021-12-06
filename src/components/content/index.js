import React from "react";
import { Link } from "react-router-dom";
import "../content/content.css";

function Content() {
    return (
        <section className="content">
            <div className="content-stats">
                <div className="content-stats-title">Рестораны и банкетные залы в Алматы</div>
                <div className="content-stats-content">
                    <div className="content-stats-main">
                        <img className="content-stats-img" src="/images/statistics.png" alt="stats" />
                        <div className="stats-number">8813</div>
                        <div className="stats-text">кафе, баров, караоке, ресторанов и банкетных залов на сайте</div>
                    </div>
                    <div className="content-stats-main">
                        <div className="stats-number">249 923</div>
                        <div className="stats-text">человека посетило сайт за последние 4 недели</div>
                    </div>
                </div>
            </div>
            <div className="content-slider">
                <img className="content-slider-img" src="/images/newyear.jpeg" alt="newyear" />
            </div>
            <div className="dots">
                <div className="dot"></div>
            </div>
            <div className="dish-list">
                <div className="dish-list-item">
                    <div className="dish">
                        <img src="/images/shashlik.png" alt="dish" />
                        <p className="dish-title">Шашлык</p>
                    </div>
                    <div className="dish">
                        <img src="/images/steik.png" alt="dish" />
                        <p className="dish-title">Стейк</p>
                    </div>
                    <div className="dish">
                        <img src="/images/sushi.png" alt="dish" />
                        <p className="dish-title">Суши</p>
                    </div>
                    <div className="dish">
                        <img src="/images/plop.png" alt="dish" />
                        <p className="dish-title">Плов</p>
                    </div>
                </div>
                <div className="dish-nav-btn">
                    <Link to="#" className="dish-btn">Все блюда</Link>
                </div>
            </div>
            <div className="place-type-cards">
                <div className="place-type-card">
                    <div className="place-type-card-content">
                        <h3 className="place-type-card__title">Рестораны</h3>
                        <p className="place-type-card__text">Вкусно, атмосферно</p>
                        <span className="place-type-card__button">414 ресторанов</span>
                    </div>
                    <img src="/images/restaurants.jpg" alt="restaurants" />
                </div>
                <div className="place-type-card">
                    <div className="place-type-card-content">
                        <h3 className="place-type-card__title">Пабы, бары</h3>
                        <p className="place-type-card__text">Зажигай, общайся</p>
                        <span className="place-type-card__button">222 паба, бара</span>
                    </div>
                    <img src="/images/pubs.jpg" alt="restaurants" />
                </div>
                <div className="place-type-card">
                    <div className="place-type-card-content">
                        <h3 className="place-type-card__title">Кофейни</h3>
                        <p className="place-type-card__text">Уютно и тепло</p>
                        <span className="place-type-card__button">138 кофеен</span>
                    </div>
                    <img src="/images/other.png" alt="restaurants" />
                </div>
            </div>
            <div className="content-stats-title content-slider">Рейтинг заведений</div>
            <div className="header-nav_btns">
                <Link to="#" className="header-nav_btns_item">Рестораны</Link>
                <Link to="#" className="header-nav_btns_item">Банкетные залы</Link>
                <Link to="#" className="header-nav_btns_item">Пабы, бары</Link>
                <Link to="#" className="header-nav_btns_item">Кафе</Link>
                <Link to="#" className="header-nav_btns_item">Кофейни</Link>
                <Link to="#" className="header-nav_btns_item">Караоке</Link>
            </div>
            <div className="content-rating">
                <div className="content-rating-card">
                    <img className="content-rating-card-img" src="/images/rate1.jpg" alt="rate" />
                    <div className="content-rating-card-title">Sansara</div>
                    <div className="content-rating-card-rate">
                        <div className="res-rate">
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-empty.svg" alt="star" />
                        </div>
                        <Link to="#" className="reviews">1 отзыв</Link>
                    </div>
                </div>
                <div className="content-rating-card">
                    <img className="content-rating-card-img" src="/images/rate2.jpg" alt="rate" />
                    <div className="content-rating-card-title">JamBull</div>
                    <div className="content-rating-card-rate">
                        <div className="res-rate">
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-empty.svg" alt="star" />
                        </div>
                        <Link to="#" className="reviews">1 отзыв</Link>
                    </div>
                </div>
                <div className="content-rating-card">
                    <img className="content-rating-card-img" src="/images/rate3.jpeg" alt="rate" />
                    <div className="content-rating-card-title">МЯТА FOOD</div>
                    <div className="content-rating-card-rate">
                        <div className="res-rate">
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-full.svg" alt="star" />
                            <img src="/images/star-empty.svg" alt="star" />
                        </div>
                        <Link to="#" className="reviews">1 отзыв</Link>
                    </div>
                </div>
            </div>
            <div className="rating-all-restaurants">
                <Link to="#" className="btn-all-restaurants">Рейтинг всех ресторанов</Link>
            </div>
        </section>
    )
}

export default Content