import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import MainPopular from "../../components/main-popular";
import Content from "../../components/content";
import "../main/main.css";

function Main(){
    return (
        <div className="main">
            <Header/>
            <Banner/>
            <MainPopular/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Main