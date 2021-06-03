import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import mainLogo from '../../assets/logo.svg';
import { Nav, NavContainer, NavLogo, NavMenu, NavMenuRight, NavItem, NavLinks, NavItemBtn, MobileIcon, MobileNavMenu, MobileNavItem, MobileNavLinks, Line, MobileNavBtn } from './navbar.styles'
import { Button } from '../../globalStyles'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <img src={mainLogo} alt="logo" />
                    </NavLogo>

                    <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>Features</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Resources</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavMenuRight>
                        <NavItem>
                            <NavLinks to='/'>Login</NavLinks>
                        </NavItem>
                        <NavItemBtn to='/'>
                            <Button round>Sign up</Button>
                        </NavItemBtn>
                    </NavMenuRight>
                    <MobileNavMenu isOpen={isOpen}>
                        <MobileNavItem>
                            <MobileNavLinks to="/">Features</MobileNavLinks>
                            <MobileNavLinks to="/">Pricing</MobileNavLinks>
                            <MobileNavLinks to="/">Resources</MobileNavLinks>
                            <Line />
                            <MobileNavLinks to="/">Login</MobileNavLinks>
                            <MobileNavBtn><Button round>Sign up</Button></MobileNavBtn>
                        </MobileNavItem>
                    </MobileNavMenu>
                </NavContainer>
            </Nav>


        </>
    )
}

export default Navbar;