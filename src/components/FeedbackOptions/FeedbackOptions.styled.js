import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-bottom: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #333;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #aaa;
  }
`;
