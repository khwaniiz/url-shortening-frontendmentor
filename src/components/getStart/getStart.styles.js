import styled from 'styled-components'
import DesktopBg from '../../assets/bg-boost-desktop.svg'
import mobileBg from '../../assets/bg-boost-mobile.svg'

export const Background = styled.div`
    background: hsl(257, 27%, 26%);
    color: #fff;
    position: relative;

`;

export const BackgroundImg = styled.div`

    background-image: url(${DesktopBg});
    background-size: cover;

    @media screen and (max-width: 768px) {
        background-image: url(${mobileBg}) no-repeat;
        background-size: cover;

    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0rem;
    @media screen and (max-width: 768px) {
      
}

`;

export const Title = styled.h1`
    font-size: 2.25rem;
    @media screen and (max-width: 768px) {
        font-size: 1.5rem; 
}
`