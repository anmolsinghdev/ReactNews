import React, { useEffect, useState } from 'react';
import { Navbar, NewsWrapper } from './style';
import Newsapi from '../api/Newsapi';
import NewsBox from './NewsBox';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newsArr, setNewsArr] = useState([]);

  useEffect(() => {
    Newsapi.get(`?country=us`).then(({ data }) => {
      setNewsArr(data.articles);
    });
  }, []);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (searchTerm) {
        Newsapi.get(`?q=${searchTerm}`).then(({ data }) => {
          setNewsArr(data.articles);
          console.log(newsArr);
        });
      }
    }, 500);
  };

  return (
    <>
      <Navbar>
        <h2>NewsMonkey</h2>
        <ul>
          <li>Top-Heading</li>
          <li>Everything</li>
          <li>Hindi</li>
          <li>English</li>
        </ul>
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
        {newsArr.map((news) => (
          <NewsBox />
        ))}
      </NewsWrapper>
    </>
  );
};

export default NavBar;
