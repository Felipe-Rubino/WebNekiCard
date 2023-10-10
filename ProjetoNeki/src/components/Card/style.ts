import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["primary"]};
  border: 0px solid ${(props) => props.theme["white"]};
  display: flex;
  width:100%;
  max-width: 300px;
  flex-direction: column;
  margin: 20px;
  margin-left: 6rem;
  height: 400px; 
  
`;

export const ButtonProfile = styled.button `
    background: transparent; 
    border: none; 
    cursor: pointer; 
    outline: none; 
    padding: 0; 
    margin: 0; 
    color: inherit; 
    font-size: inherit; 
    &:focus{
        outline: none;
        box-shadow: none;
    }
`

export const ImageContainer = styled.img`
  width: 100%;
  height: 70%;
  align-self: center;
  object-fit: cover;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
`;
export const NomeCard = styled.h3`
  text-align: center;
`;
export const ContainerInfo = styled.div`
  flex-direction: row;
  margin-left: 5px;
`;
export const ContainerSociais = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 5px;
`;
export const ContainerIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;
  
`;
export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const Dialog = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    width: 30vw;
    height: 50vh;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 9999;
`

export const TitleDialog = styled.h3`
    text-align: center

`

export const ContainerDelete = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
` 

export const DeleteButton = styled.button`
  text-align: center;
  background-color: red;
  color: white; 
  padding: 8px 16px; 
  border: none; 
  cursor: pointer;
  border-radius: 4px; 
  font-weight: bold;
  transition: background-color 0.3s; 
  &:hover {
    background-color: darkred;
  }
`

export const SocialMidia = styled.text`
  margin-left: 5px;
` 

export const DialogRedes = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    width: 25vw;
    height: 40vh;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    border: 3px solid ${(props) => props.theme["primary"]};
`