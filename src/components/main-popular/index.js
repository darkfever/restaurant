import React from "react";
import { Link } from "react-router-dom";
import "../main-popular/mainpopular.css"

function MainPopular() {
    return (
        <section className="main-popular">
            <div className="popular-head">
                <div>
                    <div className="popular-head-title">Популярные заведения</div>
                    <p>Посетители сайта часто бронируют здесь столики</p>
                </div>
            </div>
            <div className="popular-content">
                <div className="popular-content-table">
                    <Link to="#" className="popular-content-item">
                        <img src="/images/1.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                    <Link to="#" className="popular-content-item">
                        <img src="/images/2.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                    <Link to="#" className="popular-content-item">
                        <img src="/images/3.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                    <Link to="#" className="popular-content-item">
                        <img src="/images/4.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                </div>
                <div className="popular-content-table">
                    <Link to="#" className="popular-content-item">
                        <img src="/images/5.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                    <Link to="#" className="popular-content-item">
                        <img src="/images/6.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                    <Link to="#" className="popular-content-item">
                        <img src="/images/7.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                    <Link to="#" className="popular-content-item">
                        <img src="/images/8.png" alt="popular" className="popular-content-item-img" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MainPopular