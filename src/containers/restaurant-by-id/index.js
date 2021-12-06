import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import ResItem from "../../components/res-item"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as authActions from '../../actions/authActions'

function RestaurantById(props) {
    const resId = props.match.params.id

    return (
        <div className="main">
            <Header isAuth={props.isAuth} signOut={props.authActions.signOut} />
            <ResItem restaurantId={resId}/>
            <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth,
})

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantById)