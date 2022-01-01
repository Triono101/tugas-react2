import React from "react";
import './NewsElement/AddNews.css'
import News from "./NewsElement/indexNews";
import NewsApi from "./NewsElement/body";
import Input from "./NewsElement/inputSearch";
import Footer from "./NewsElement/footer";

export default class Page extends React.Component {

    render() {
        return(
            <div>
                <News />
                <Input />
                <NewsApi />
                <Footer />
            </div>
        )
    }
} 