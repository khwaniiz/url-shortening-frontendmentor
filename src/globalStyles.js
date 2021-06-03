import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 768px) {
        padding-right: 20px;
        padding-left: 20px;
      }

`;


export const Button = styled.button`
    width: 100%;
    padding: 15px 25px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: ${({ round }) => (round ? '200px' : '10px')};
    background: hsl(180, 66%, 49%);
    color: #fff;
    transition: all 0.2s ease-in-out;

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    &:hover {
        background: hsl(180, 66%, 70%);
    }

    @media screen and (max-width: 1024px) {
        padding: 15px 20px;
    }
`;
export const SquareButton = styled.button``;



export default GlobalStyle;
