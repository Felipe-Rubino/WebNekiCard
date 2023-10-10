import styled from "styled-components";

export const ContainerCard = styled.div`
    background-color: ${props => props.theme['white']};
    padding: 2.5rem 0 2.0rem;
    width: 50%;
`

export const ImageCard = styled.img`
    width: 10%;
    height: 10%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
`;