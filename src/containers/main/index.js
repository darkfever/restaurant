import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import MainPopular from "../../components/main-popular";
import Content from "../../components/content";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActions from '../../actions/authActions'
import "../main/main.css";
import { Spin } from "antd";

function Main(props){
    return (
        <Spin spinning={props.isLoading} size="large">
        <div className="main">
            <Header isAuth={props.isAuth} signOut={props.authActions.signOut}/>
            <Banner/>
            <MainPopular/>
            <Content/>
            <Footer/>
        </div>
        </Spin>
    )
}

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth,
    isLoading: state.authReducer.isLoading
})

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Main)