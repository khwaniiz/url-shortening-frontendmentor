import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
    background: #fff;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 768px) {
        height: 60px;
      }
`;

export const NavContainer = styled(Container)`
    display: flex;
    height: 80px;
    

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        height: 0px
    }
    ${Container}
    
`;

export const NavLogo = styled(Link)`
    color: hsl(0, 0%, 75%);
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: flex;
        margin-left: auto;
        
        align-items: center;
        font-size: 1.6rem;
        cursor: pointer;
        color: hsl(0, 0%, 75%);
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    @media screen and (max-width: 768px) {
        display: none;
    
      }
`;

export const NavMenuRight = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    @media screen and (max-width: 768px) {
        display: none;
     }
`;
export const NavItem = styled.div`
    height: 80px;
    @media screen and (max-width: 768px) {
        width: 100%;   
    
}`;

export const NavLinks = styled(Link)`
    color: hsl(0, 0%, 75%);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1.2rem;
    height: 100%;
    font-size: 1rem;
    font-weight: 700;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: hsl(260, 8%, 14%);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
       
    }
`;

export const NavItemBtn = styled(Link)`
    padding: 0.5rem 1.2rem;
`;



// Mobile

export const MobileNavMenu = styled(Container)`
display: none;
visibility: hidden;
opacity: 0;
-webkit-transition: opacity 600ms, visibility 600ms;
transition: opacity 600ms, visibility 600ms;

    position: relative;
    @media screen and (max-width: 960px) {   
        display: ${({ isOpen }) => (isOpen ? "block" : "none")};
        visibility: visible;
        opacity: 1;
        width: 100%;
        z-index: 999;
        top: 20px;
        padding: 0;
        
    }
    ${Container}

`;
export const MobileNavItem = styled.div`
    background: hsl(257, 27%, 26%);
    padding: 1.5rem;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
`;
export const MobileNavLinks = styled(Link)`
    color: #fff;
    font-weight: 700;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;
`;

export const Line = styled.hr`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255,255,255,0.25);
    width: 100%;
    margin: 1rem 0 1rem 0;
`;

export const MobileNavBtn = styled.div`
    width: 100%;
    padding: 1rem;
`;