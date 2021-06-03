import styled from 'styled-components';
import DesktopBg from '../../assets/bg-shorten-desktop.svg'
import mobileBg from '../../assets/bg-shorten-mobile.svg'

export const FormContainer = styled.div`
    background: hsl(258, 27%, 26%);
    padding: 2.75rem;
    width: 100%;
    border-radius: .5rem;
    height: 100%;
    position: relative;
    top: -5rem;
    background-image: url(${DesktopBg});
    background-size: cover;

    @media screen and (max-width: 900px) {
        background-image: url(${mobileBg}) no-repeat;
        background-size: cover;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
    flex-direction: column;
    }
`;

export const FormInput = styled.input`
    padding: 12px 20px;
    border-radius: .5rem;
    margin-right: 1.5rem;
    outline: none;
    border: none;
    font-size: 1.125rem;
    width: 100%;
    border: ${({ error }) => (error ? '2px solid #f46262' : '1px solid #fff')};
    color: ${({ error }) => (error ? '#f46262' : 'hsl(0, 0%, 75%)')};

    &::placeholder {
        color: hsl(0, 0%, 75%)
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        margin: 0 0 3rem 0;
    }
  
`;

export const ButtonContainer = styled.div`
    width: 20%;

    @media screen and (max-width: 900px) {
        width: 100%;
    }
`
    ;


export const ErrorText = styled.p`
    font-style: italic;
    color: #f96262;
    margin-top: 15px;
    margin-left: 44px;
    position: absolute;
    bottom: 1rem;
    left: 0;

    @media screen and (max-width: 900px) {
        bottom: 7.5rem;
        margin-left: 2.7rem;
    }
`;

export const ResultContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  position: relative;
  top: -55px;
  
  @media screen and (max-width: 900px) {
    flex-direction: column;
    display: block;
   
  }

`;
export const OriginalLinkContainer = styled.div`
padding: 2rem;
@media screen and (max-width: 900px) {
    padding: .5rem;
    border-bottom: 1px solid #eee;
    
}
`;
export const ResultLinkContainer = styled.div`
display: flex;
align-items: center;
padding: 2rem;
color: hsl(180, 66%, 49%);
@media screen and (max-width: 900px) {
    flex-direction: column;
    padding: .5rem;
    align-items: flex-start;
  }

`;

export const ShortUrlContainer = styled.div`
margin-right: 2rem;
@media screen and (max-width: 900px) {
   margin-bottom: .5rem;
  }
`