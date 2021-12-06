import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as favoriteActions from '../../../actions/favoriteActions'
import * as authActions from '../../../actions/authActions'
import { Table, Space, Button } from 'antd'
import "../favorite/favorite.css"
import { Link } from "react-router-dom";

function UserFavorites(props) {
    const [favorites, setFavorites] = useState([])
    const { favoriteActions } = props

    useEffect(() => {
        favoriteActions.fetchFavorites()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
        setFavorites(props.favorites)
    }, [props.favorites])
    
    const columns = [
        {
            title: 'Ресторан',
            dataIndex: 'name',
            key: 'name',
            render: text => <>{text}</>,
        },
        {
            title: 'Фото',
            dataIndex: 'image',
            key: 'image',
            render: (text, record) => (
                <Space size="middle">
                    <img className="favorite-image" src={`http://localhost:9000/${record.image}`} alt="restaurant" />
                </Space>
            ),
        },
        {
            title: 'Ссылка',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/restaurant/${record.id}`}><Button type="primary">Перейти</Button></Link>
                </Space>
            ),
        },
    ]

    let data = favorites.map((item, i) => {
        return (
            {
                key: i,
                name: item.Restaurant.name,
                image: item.Restaurant.image,
                id: item.restaurantId
            }
        )
    })

    return (
        <div className="main">
            <Header isAuth={props.isAuth} signOut={props.authActions.signOut} />
            <div className="own-favorites">
                <div className="own-favorites-title">Мои избранные</div>
                <Table className="favorites-table" columns={columns} dataSource={data} pagination={false} bordered />
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    favorites: state.favoriteReducer.favorites,
    isAuth: state.authReducer.isAuth,
})

const mapDispatchToProps = dispatch => ({
    favoriteActions: bindActionCreators(favoriteActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(UserFavorites)