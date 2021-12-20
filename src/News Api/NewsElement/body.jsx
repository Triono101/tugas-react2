import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class News extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_288553d4acd67109e308b37c50915957f69e&language=en"
      )
      .then(response => {
        return response.data.results.map(article => ({
          date: `${article.pubDate}`,
          title: `${article.title}`,
          url: `${article.link}`,
          image: `${article.image_url}`,
          author: `${article.creator}`,
          media: `${article.source_id}`,
        }))
       })
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <div className="newsData">
          {!isLoading ? (
            articles.map(article => {
              const { date, title, url, author, media, image } = article;
              return (
                <div key={title} id="newsData" className="news">
                <img src={image} alt="Gambar tidak tersedia" />
                <h5 className="title">{title}</h5>
                <p className="author">{author} - {date}</p>
                <p className="description" style={{fontWeight: 'Bold'}}>{media}
                    <a href={url} target="_blank" rel="noreferrer"><button style={{marginLeft: '5px'}} className="btn-klik">Read Detail</button></a></p>
            </div>
              );
            })
          ) : (
            <Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={3000} />
          )}
        </div>

      </React.Fragment>
    );
  }
}