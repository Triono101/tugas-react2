import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./newsList";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://newsdata.io/api/1/news?apikey=pub_288553d4acd67109e308b37c50915957f69e&language=en")
      .then(res => {
        setArticles(res.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log(error, "error");
      });
  }, []);

  return (
    <div className="newsData">
      {
      !Loading ? (
      articles.map((article, i) => (
        <NewsCard article={article} key={i} />
      ))
      )
      : ( <Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={2000} />)
      }
    </div>
  );
}

export default NewsList;