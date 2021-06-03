import styled from 'styled-components';


export const Background = styled.div`
    width: 100%;
`;

export const Row = styled.div`
display: flex;
justify-content: space-between;
text-align: left;
margin-bottom: 7rem;
@media screen and (max-width: 900px) {
  flex-direction: column;
  text-align: center;
}

`;

export const Column = styled.div`
    margin: 2rem 0;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    overflow: hidden;
    padding-bottom: 8rem;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-text: center;
        padding-bottom: 4rem;
    }

`;

export const TextContainer = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 900px) {
  width: unset;
  display: unset;
  order: 2;
}
`;

export const ImgContainer = styled.div`
width: 45%;
overflow: hidden;
@media screen and (max-width: 900px) {
  width:100%;
  margin-bottom: 2rem;
  margin-top: 1rem;
}
`;

export const Img = styled.img`
    width: calc(100% + 14rem);
    @media screen and (max-width: 768px) {
    
  
    }   
`;



export const Title = styled.h1`
    color: hsl(260, 8%, 14%);
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.2;
    @media screen and (max-width: 1024px) {
        font-size: 3rem;
    } 

    @media screen and (max-width: 500px) {
        font-size: 2rem;
    }  
`;

export const SubTitle = styled.p`
    color: hsl(0, 0%, 75%);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2;
    @media screen and (max-width: 768px) {
        margin-top: 1rem;
      }
`;

export const ButtonContainer = styled.div`
    margin: 2rem 0;
    width: 150px;
    @media screen and (max-width: 768px) {
        margin: 2rem auto 0 auto;
    }   
`;




