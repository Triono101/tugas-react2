import React from "react";
import './NewsElement/styleNews.css'
import News from "./NewsElement/indexNews";
import NewsApi from "./NewsElement/body";
import Input from "./NewsElement/inputSearch";
import FooterData from "./NewsElement/footer";

export default class Page extends React.Component {

    render() {
        return(
            <div className="data">
                <News />
                <Input />
                <NewsApi />
                <FooterData />
            </div>
        )
    }
} 