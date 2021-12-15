import React, { useEffect, useState } from 'react';
import { Navbar, NewsWrapper } from './style';
import Newsapi from '../api/Newsapi';
import NewsBox from './NewsBox';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    Newsapi.get(`/top-headlines/?country=in`).then(({ data }) => {
      setNewsArticles(data.articles);
    });
  }, []);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');
    setTimeout(() => {
      if (searchTerm) {
        Newsapi.get(`/everything?q=${searchTerm}`).then(({ data }) => {
          setNewsArticles(data.articles);
        });
      }
    }, 500);
  };

  return (
    <>
      <Navbar>
        <h2>NewsMonkey</h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Type Here"
            value={searchTerm}
            onChange={onInputChange}
          />
        </form>
      </Navbar>
      <NewsWrapper>
        {newsArticles.map(({ title, content, source, urlToImage, url }) => (
          <NewsBox
            title={title}
            content={content}
            source={source}
            urlToImage={urlToImage}
            url={url}
          />
        ))}
      </NewsWrapper>
    </>
  );
};

export default NavBar;
