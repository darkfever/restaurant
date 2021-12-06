import React from "react";
import "../footer/footer.css";

function Footer(){
    return(
        <footer>
            <div className="footer-title">
                <div className="footer-title-main">Все места в Алматы</div>
                <div className="footer-title-content">
                    <div className="number">2300</div>
                    <div className="text">кафе, баров, караоке, ресторанов и банкетных залов Алматы на сайте</div>
                </div>
                <div className="footer-title-content">
                    <div className="number">71 843</div>
                    <div className="text">человека посетило сайт за последние 30 дней</div>
                </div>
            </div>
            <div className="footer-content">
                <div className="first-column">
                    <div className="column-title">Заведения</div>
                    <div className="column-content">
                        <div className="column-content-item">Рестораны</div>
                        <div className="column-content-item">Банкетные залы</div>
                        <div className="column-content-item">Пабы, бары</div>
                        <div className="column-content-item">Кафе</div>
                        <div className="column-content-item">Караоке</div>
                        <div className="column-content-item">Летние площадки</div>
                        <div className="column-content-item">Кофейни</div>
                        <div className="column-content-item">Кулинарии, кондитерские</div>
                        <div className="column-content-item">Столовые</div>
                    </div>
                </div>
                <div className="second-column">
                    <div className="column-title">Отдых и развлечения</div>
                    <div className="column-content">
                        <div className="column-content-item">Зоны отдыха</div>
                        <div className="column-content-item">Бассейны</div>
                        <div className="column-content-item">Сауны, бани</div>
                        <div className="column-content-item">Гостиницы</div>
                        <div className="column-content-item">Конференц-залы</div>
                    </div>
                </div>
                <div className="third-column">
                    <div className="column-title">Подборки</div>
                    <div className="column-content">
                        <div className="column-content-item">Доставка еды</div>
                        <div className="column-content-item">Еда на вынос</div>
                        <div className="column-content-item">10 лучших ресторанов Алматы</div>
                        <div className="column-content-item">10 лучших пабов, баров Алматы</div>
                        <div className="column-content-item">10 лучших караоке Алматы</div>
                        <div className="column-content-item">10 лучших кафе Алматы</div>
                        <div className="column-content-item">Где провести детский праздник в Алматы</div>
                        <div className="column-content-item">Новогодние корпоративы в Алматы 2021-2022</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer