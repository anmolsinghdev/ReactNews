import React from 'react';
import { News } from './style.js';
const NewsBox = ({ title, content, source, urlToImage, url }) => {
  return (
    <>
      <News>
        <img src={`${urlToImage}`} alt={title} />
        <h4>
          <a href={url}>{title}</a>
        </h4>
        <p>{content}</p>
      </News>
    </>
  );
};

export default NewsBox;
