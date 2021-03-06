import { Button } from "antd";
import React, { useEffect, useState } from "react"
import "../res-item/resItem.css"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as restaurantActions from '../../actions/restaurantActions'
import * as authActions from '../../actions/authActions'
import * as orderActions from '../../actions/orderActions'
import * as reviewActions from '../../actions/reviewActions'
import Order from "../order"
import Review from "../review"

function ResItem(props) {
    const { restaurantId, isAuth } = props
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isReviewModalVisible, setIsReviewModalVisible] = useState(false)
    const [restaurant, setRestaurant] = useState({})
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        props.restaurantActions.getRestaurant(Number(restaurantId))
        props.reviewActions.fetchReview(Number(restaurantId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setRestaurant(props.restaurantItem)
    }, [props.restaurantItem])

    useEffect(() => {
        setReviews(props.reviews)
    }, [props.reviews])

    const reviewsList = reviews?.map((item, i) => {
        return (
            <div className="review-card" key={i}>
                <div className="review-user-name">{item.User.name}</div>
                <div className="review-user-text">{item.text}</div>
                <div className="review-user-date">{item.createdAt.substring(0, 10)}</div>
            </div>
        )
    })
    console.log(reviews)
    const getRate = item => {
        let content = [];
        for (let i = 1; i <= item; i++) {
            content.push(<img className="rate-star" key={i} src="/images/star-full.svg" alt={i} />);
        }
        return content;
    }
   
    const kitchens = restaurant?.ResKitLists?.map((item, i) => <div className="kitchen-name" key={i}>{item.Kitchen.name}</div>)

    const [orderData, setOrderData] = useState({
        location: '',
        id: null
    })

    const showModal = (restaurant) => {
        setIsModalVisible(true)
        setOrderData({ location: restaurant.location, id: restaurant.id })
    }

    const showReviewModal = () => {
        setIsReviewModalVisible(true)
    }

    return (
        <div className="restaurant-item">
            <div className="res-item-title">{restaurant.name}</div>
            <div className="res-item-buttons">
                <Button className="res-item-btn">????????????????</Button>
                <Button className="res-item-btn">???????????????? ??????</Button>
                <Button className="res-item-btn">????????????-????????</Button>
                <Button className="res-item-btn">??????????????</Button>
            </div>
            <div className="res-item-buttons">
                <Button className="res-item-btn">????????????????</Button>
                <Button className="res-item-btn">????????????<span className="res-item-counter">{reviews.length}</span></Button>
                <Button className="res-item-btn">??????????</Button>
                <Button className="res-item-btn">????????</Button>
                <Button className="res-item-btn">??????????????????????</Button>
                <Button className="res-item-btn">??????????????</Button>
            </div>
            <div className="res-item-cover">
                <img className="res-item-image" src={`http://localhost:9000/${restaurant.image}`} alt="restaurant" />
            </div>
            <div className="res-item-body">
                <div className="res-item-name">{restaurant.name}</div>
                <span>????????????????</span>
                <div className="res-item-rate">{getRate(restaurant.rate)}</div>
                <div className="res-item-data">
                    <div className="res-item-data-content">
                        <img className="res-item-icons" src="/images/dish.png" alt="dish" />
                        <div className="res-item-desc">
                            <div className="res-item-kitchens">??????????</div>
                            <div className="res-item-kitchen">{kitchens}</div>
                        </div>
                    </div>
                    <div className="res-item-data-content">
                        <img className="res-item-icons" src="/images/cost.png" alt="dish" />
                        <div className="res-item-desc">
                            <div className="res-item-kitchens">?????????????? ????????</div>
                            <div className="res-item-kitchen">{restaurant.averageBill} ?????????? ???? ????????????????</div>
                        </div>
                    </div>
                    <div className="res-item-data-content">
                        <img className="res-item-icons" src="/images/cnt_places.png" alt="dish" />
                        <div className="res-item-desc">
                            <div className="res-item-kitchens">???????????????????? ????????</div>
                            <div className="res-item-kitchen">{restaurant.amountOfPlace} ????????</div>
                        </div>
                    </div>
                </div>
                <div className="place-info-list mt-5">
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">????</span>
                        <span className="place-info-list__text">??????-??????????????????, Wi-Fi, ??????????????, ?????????????? ????-??????????</span>
                        </div>
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">????</span>
                        <span className="place-info-list__text">??????????????, DJ ?? 08:00 ??? 02:00</span>
                    </div>
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">????</span>
                        <span className="place-info-list__text">?????????????? ??????????????????, ?????????????? ??????????????</span>
                    </div>
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">???????</span>
                        <span className="place-info-list__text">???????????????? ????????????????????, ????????????????????</span>
                    </div>
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">??????</span>
                        <span className="place-info-list__text">08:00???02:00, ?????? ????????????????</span>
                    </div>
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">{restaurant.location}</span>
                    </div>
                    <div className="place-info-list__item">
                        <Button className="res-item-btn map-btn">?????????????????? ??????????????</Button>
                        {isAuth && <Button onClick={showReviewModal} className="res-item-btn map-btn">???????????????? ??????????</Button>}
                        {isAuth && <Button onClick={() => showModal(restaurant)} className="res-item-bron">??????????????????????????</Button>}
                    </div>
                    <div className="place-info-list__item">
                        <span className="place-info-list__icon">{restaurant.phone}</span>
                    </div>
                </div>
            </div>
            <div className="res-reviews">
                <div className="review-title">???????????? ?? {restaurant.name}</div>
                <div className="review-content">
                    {reviewsList.length > 0 ? reviewsList : '???????? ?????? ??????????????'}
                </div>
            </div>
            <Order setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} orderData={orderData} handleOrder={props.orderActions.addOrder} />
            <Review isReviewModalVisible={isReviewModalVisible} setIsReviewModalVisible={setIsReviewModalVisible} restaurantId={Number(restaurantId)} handleReview={props.reviewActions.addReview}/>
        </div>
    )
}

const mapStateToProps = state => ({
    restaurantItem: state.restaurantReducer.restaurantItem,
    isAuth: state.authReducer.isAuth,
    reviews: state.reviewReducer.reviews
})

const mapDispatchToProps = dispatch => ({
    restaurantActions: bindActionCreators(restaurantActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch),
    reviewActions: bindActionCreators(reviewActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(ResItem)