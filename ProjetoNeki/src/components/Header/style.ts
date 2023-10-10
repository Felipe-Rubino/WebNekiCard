import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['primary']};
    padding: 1.5rem 0 1.0rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Imagem = styled.img`
    border-radius: 20px;
    height: 5rem;
`

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
