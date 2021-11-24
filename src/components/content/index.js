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

            </div>
        </section>
    )
}

export default Content