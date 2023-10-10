import styled from "styled-components";


export const Input = styled.input`
    width: 20%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
   
    
`
export const ContainerUpdate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 20px;
    margin-bottom: 5px;
    flex-wrap: wrap
`

export const Title = styled.h1`
    text-align: center;
    margin-top: 3rem;
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

  &:hover {
    background-color: ${(props) => props.theme.primaryHover}; 
  }
`;