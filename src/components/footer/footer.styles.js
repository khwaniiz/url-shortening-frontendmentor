import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Background = styled.div`
    background: hsl(260, 8%, 14%);
    color: #fff
`;

export const Row = styled.div`
    display: flex;
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media screen and (max-width: 768px) {
       flex-direction: column;
       justify-content: center;
       align-items: center;
       text-align: center;
    }
    
`;

export const ColumnLeft = styled.div`
    flex: 30%;

    @media screen and (max-width: 768px) {
        margin-bottom: 3rem;
        margin-top: 1rem;  
     }
`;

export const ColumnRight = styled.div`
    flex: 70%;
    display: flex;

    justify-content: space-around;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        
     }
`;

export const LogoContainer = styled.div`
 
`;

export const LogoText = styled.h1`
`;


export const RightItems = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 768px) {
    margin-bottom: 2.5rem; 
 }

`;

export const TopItems = styled.h3`
    padding-bottom: 1rem;
`;

export const BottomItems = styled(Link)`
text-decoration: none;
color: hsl(257, 7%, 63%);
line-height: 2.2;
font-size: 1.125rem;
&:hover {
    color: hsl(180, 66%, 49%);
}
`;

export const IconItems = styled.div`
    display: flex;

`;

export const IconContainer = styled.div`
    padding: 0 1rem;
        path:hover {
            cursor: pointer;
            fill: hsl(180, 66%, 49%);
            transition: all 0.1s ease-in-out;
        
        }
`;

