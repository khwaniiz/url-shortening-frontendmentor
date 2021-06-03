import styled from 'styled-components';

export const CardContainer = styled.div`
    background: #fff;
    padding: 2.5rem;
    max-width: 450px;
    margin-right: 2rem;
    border-radius: 1rem;
    &:last-child {
        margin-right: 0px;
    }  
  
    position: relative;

    @media screen and (max-width: 768px) {
        margin-right: 0px;
        margin-bottom: 6rem;
        max-width: 350px;
        
    }
   
`;

export const CardImg = styled.div`
    background: hsl(255, 11%, 22%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    vertical-align: middle;
    padding: 20px;

    position: absolute;
    top: -40px;

    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }
    
`;
export const Img = styled.img`
    width: 40px;
`;
export const CardTexts = styled.div`
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;
export const CardTitle = styled.h3`

`;
export const CardDescription = styled.p`
    margin-top: 1rem;
    color: hsl(0, 0%, 75%);
    font-size: 1.125rem
`;