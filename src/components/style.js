import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  background-color: #777;
  justify-content: space-between;
  color: #fff;
  padding: 0.5rem 1rem;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      padding: 0rem 1rem;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
  form {
    input {
      border-radius: 5px;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
      padding: 0.5rem;
      border: none;
    }
  }
`;
export const NewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0rem;
  gap: 2rem;
`;

export const News = styled.div`
  background-color: #ccc;
  border-radius: 5px;
  width: 20rem;
  /* border: 1px solid red; */
  h4 {
    padding: 0.5rem 1rem;
    background-color: #777;
    margin-top: -0.2rem;
    a {
      text-decoration: none;
      color: black;
      :hover {
        color: #a13333;
        text-decoration: underline;
      }
    }
  }
  p {
    padding: 1rem;
  }
  > img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
    height: 15rem;
    width: 100%;
  }
`;
