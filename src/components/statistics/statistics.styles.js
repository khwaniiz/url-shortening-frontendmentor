import styled from 'styled-components';

export const Background = styled.div`
    width: 100%;
    height: auto;
    background: hsl(270, 5%, 93%);
    padding-bottom: 5rem;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 5rem 0;
    text-align: center;
    @media screen and (max-width: 768px) {
        padding: 1rem 0 6rem 0;
      
      }
  
`;

export const Title = styled.h1`
    color: hsl(260, 8%, 14%);
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.2;  
    width: 100%;
    margin-bottom: 1rem;
    @media screen and (max-width: 1024px) {
        font-size: 2rem;
    } 

    @media screen and (max-width: 500px) {
        font-size: 1.75rem;
    }  
`;

export const SubTitle = styled.p`
    color: hsl(0, 0%, 75%);
    font-size: 1.2rem;
    line-height: 2;
    font-weight: 500;
    text-align: center;

    max-width: 500px;
    margin: 0 auto;
    
    @media screen and (max-width: 768px) {
        margin-top: 1rem;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    position: relative;
   
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
   
`;

export const CardTwo = styled.div` 
    padding: 2.5rem;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
   
`;

export const CardThree = styled.div`
    padding: 5rem 0;
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const Line = styled.div`
    position: absolute;
    background: hsl(180, 66%, 49%);
    height: 9px;
    width: 80%;
    top: 8rem;

@media screen and (max-width: 768px) {
    height: 75%;
    width: 9px;
    top: 0;
}

`;



