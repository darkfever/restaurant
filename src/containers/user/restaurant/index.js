import React, { useEffect, useState} from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Search from "../../../components/search"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as restaurantActions from '../../../actions/restaurantActions'
import * as kitchenActions from '../../../actions/kitchenActions'
import * as orderActions from '../../../actions/orderActions'
import * as authActions from '../../../actions/authActions'
import * as favoriteActions from '../../../actions/favoriteActions'
import Order from "../../../components/order";
import { Link } from "react-router-dom"
import Favorite from "../../../components/favorite"
import "../restaurant/restaurantUser.css"

function RestaurantUser(props) {
    const { isAuth, restaurantActions, kitchens, authActions, kitchenActions, favoriteActions } = props
    const [restaurant, setRestaurant] = useState([])
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        restaurantActions.fetchRestaurants()
        kitchenActions.fetchKitchens()
        favoriteActions.fetchFavorites()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        setRestaurant(props.restaurants)
    }, [props.restaurants])

    useEffect(() => {
        setFavorites(props.favorites)
    }, [props.favorites])
    
    const getRate = item => {
        let content = [];
        for (let i = 1; i <= item; i++) {
            content.push(<img className="rate-star" key={i} src="/images/star-full.svg" alt={i} />);
        }
        return content;
    }

    const onChoose = value => {
        if (value === "all") {
            restaurantActions.fetchRestaurants()
        } else {
            restaurantActions.filterRestaurants(JSON.stringify([value]))
        }
    }

    const onClick = (e) => {
        const data = [...restaurant]
        data.sort((b,a ) => {
            if(a.rate > b.rate){
                return 1
            }
            if(a.rate < b.rate){
                return -1
            }
            return 0
        })
        setRestaurant(data)
    }

    const [isModalVisible, setIsModalVisible] = useState(false)
    
    const [orderData, setOrderData] = useState({
        location: '',
        id: null
    })

    const showModal = (restaurant) => {
        setIsModalVisible(true)
        setOrderData({ location: restaurant.location, id: restaurant.id})
    }

    const addToFavorite = (id) => {
        favoriteActions.addFavorite({
            restaurantId: id
        })
    }
    
    const restaurantsList = restaurant.map((item, i) => {
        let fav = favorites.filter(favorite => favorite.restaurantId === item.id )
        return (
            <div className="restaurant-card" key={i}>
                <div className="restaurant-card-cover">
                    <img className="restaurant-card-img" src={`http://localhost:9000/${item.image}`} alt="restaurant" />
                </div>
                <div className="restaurant-card-body">
                    <div className="card-item-header">
                        <Link to={`/restaurant/${item.id}`}><div className="card-item-name card-info">{item.name}</div></Link>
                        {isAuth ? <Favorite resId={item.id} fav={fav} addToFavorite={addToFavorite} /> : ''}
                    </div>
                    <div className="card-item-location card-info">{item.location}</div>
                    <div className="card-item-amountOfPlace card-info">Кол-во посадочных мест: {item.amountOfPlace}</div>
                    <div className="card-item-amountOfPlace card-info">{item.phone}</div>
                    <div className="card-item-amountOfPlace card-info">{item.averageBill} тенге на человека</div>
                    <div className="card-item-amountOfPlace card-info">Оценка: {getRate(item.rate)}</div>
                    <div className="card-item-button" onClick={() => showModal(item)}>Забронировать</div>
                </div>
            </div>
        )
    })
    return (
        <div className="main">
            <Header isAuth={isAuth} signOut={authActions.signOut}/>
            <div className="restaurant-title">Рестораны в Алматы: {props.restaurants.length} заведений с меню, отзывами и фото</div>
            <div className="restaurant-title-content">Рестораны Алматы. Средний счёт на человека от 600 до 75 000 тенге. Забронируйте столик или сделайте заказ банкета.</div>
            <Search kitchen_data={kitchens} onChoose={onChoose} onClick={onClick}/>
            <div className="restaurants">
                {restaurantsList}
            </div>
            <Order setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} orderData={orderData} handleOrder={orderActions.addOrder}/>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    restaurants: state.restaurantReducer.restaurants,
    total: state.restaurantReducer.total,
    kitchens: state.kitchenReducer.kitchens,
    isAuth: state.authReducer.isAuth,
    favorites: state.favoriteReducer.favorites,
})

const mapDispatchToProps = dispatch => ({
    restaurantActions: bindActionCreators(restaurantActions, dispatch),
    kitchenActions: bindActionCreators(kitchenActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch),
    favoriteActions: bindActionCreators(favoriteActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantUser)