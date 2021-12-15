import React from 'react';
import { News } from './style.js';
const NewsBox = ({ title, content, source, urlToImage, url }) => {
  return (
    <>
      <News>
        <img
          src={
            urlToImage
              ? urlToImage
              : 'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
          }
          alt={title}
        />
        <h4>
          <a href={url}>{title}</a>
        </h4>
        <p>
          {content
            ? content
            : 'LONDON: The hypermutated Omicron Covid variant, known to evade vaccine efficacy, cannot be deterred with two doses of Oxford-AstraZeneca or Pfizer-BioNTech Covid-19 shots, scientists at Oxford Univer'}
        </p>
      </News>
    </>
  );
};

export default NewsBox;
