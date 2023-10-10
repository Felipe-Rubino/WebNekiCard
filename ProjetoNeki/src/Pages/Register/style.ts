import styled from "styled-components";


export const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    margin-top: 3rem;
    
`

export const ContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-bottom: 5px;
    
`

export const Input = styled.input`
    width: 20%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    &.required::before {
    content: "*"; 
    color: red; 
  }
  @media(max-width : 768px){
      width: 50%;
    }
    
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 20%;
  margin-top: 10px;
  @media(max-width : 768px){
      width: 50%;
    }

  &:hover {
    background-color: ${(props) => props.theme.primaryHover}; 
  }
`;
