import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as orderActions from '../../../actions/orderActions'
import * as authActions from '../../../actions/authActions'
import OwnOrder from "../../../components/own-order";
import "../order/userOrders.css";

function UserOrders(props) {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        props.orderActions.fetchOrder()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        setOrders(props.orders)
    }, [props.orders])
    const deleteOrder = (id) => {
        props.orderActions.deleteOrder(id)
    }
    return (
        <div className="main">
            <Header isAuth={props.isAuth} signOut={props.authActions.signOut}/>
            <OwnOrder orders={orders} deleteOrder={deleteOrder} />
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    orders: state.orderReducer.orders,
    isAuth: state.authReducer.isAuth,
})

const mapDispatchToProps = dispatch => ({
    orderActions: bindActionCreators(orderActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(UserOrders)