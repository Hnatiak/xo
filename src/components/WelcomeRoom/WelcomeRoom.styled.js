import styled from '@emotion/styled';

export const Section = styled.div`
  background: url(${(props) => props.backgroundImage});
  margin: 0;
  padding: 0;
  color: #fefefe;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Name = styled.h2`
  color: #fff;
  margin: 32px 0;
  line-height: 1.5em;
  font-size: 42px;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 24px 0;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;