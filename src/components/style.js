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
export const NewsWrapper = styled.div``;
