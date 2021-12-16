import React from "react";
import '../AddNews.css'
import News from "./NewsElement/indexNews";
import NewsApi from "./NewsElement/body";
import Input from "./NewsElement/inputSearch";

export default class Page extends React.Component {

    render() {
        return(
            <div>
                <News />
                <Input />
                <NewsApi />
            </div>
        )
    }
} 