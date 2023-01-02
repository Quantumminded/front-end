import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 480px;
  margin: 20px auto;
  padding: 15px;
  background: transparent;
  border: 1px solid grey;
  border-radius: 3px;
  color: #fff;
`;
const Button = styled.button`
  border: 1px solid black;
  border-radius: 12px;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity));
  border: 0;
  color: rgb(0 8 20 / var(--tw-text-opacity));
  padding: 10px;
  font-size: 20px;
  width: 330px;
  margin: 20px auto;
  display: block;
  cursor: pointer;
`;
export { Input, Button };
