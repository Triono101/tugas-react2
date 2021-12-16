import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class NewsApi extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  getArticles() {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=f6527bfa24054bd08123fcd4fc298f5b")
      .then(response => {
        return response.data.articles.map(article => ({
            date: `${article.publishedAt}`,
            source: `${article.url}`,
            image: `${article.urlToImage}`,
            title: `${article.title}`,
            author: `${article.author}`,
            describe: `${article.description}`,
        }));
      })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
        <React.Fragment>
            <div className="newsData">
                {!isLoading ? (
                articles.map(article => {
                    const { author, title, describe, date, image, source } = article;
                    return (
                        <div key={title} id="newsData" className="news">
                            <img src={image} alt="Gambar tidak ditemukan" />
                            <h5 className="title">{title}</h5>
                            <p className="author">{author} - {date}</p>
                            <p className="description">{describe}
                                <a href={source} target="_blank" rel="noreferrer"><button style={{marginLeft: '5px'}} className="btn-klik">Read Detail</button></a></p>
                        </div>
                    );
                })
                ) : (
                    <Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={3000} />
                )
                }
            </div>
        </React.Fragment>
    );
  }
}