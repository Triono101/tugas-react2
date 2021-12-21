import React from "react";
import "../AddNewsHook.css";

export default function NewsCard({ article }) {
  return (
      <div className="news">
        <img src={article.image_url} alt="Gambar tidak ditemukan" />
        <h5 className="title">{article.title}</h5>
        <p className="author">{article.creator} - {article.pubDate}</p>
        <p className="description">{article.source_id}
            <a href={article.link} target="_blank" rel="noreferrer">
                <button style={{marginLeft: '5px'}} className="btn-klik">Read Detail</button>
            </a>
        </p>
      </div>
  );
}