import React from 'react';
import { Background, Row, ColumnLeft, ColumnRight, LogoContainer, LogoText, RightItems, TopItems, BottomItems, IconItems, IconContainer } from './footer.styles'
import { Container } from '../../globalStyles'

import { ReactComponent as FacebookIcon } from '../../assets/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../assets/icon-pinterest.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icon-instagram.svg'

const Footer = () => {

    return (
        <>
            <Background>
                <Container>
                    <Row>
                        <ColumnLeft>
                            <LogoContainer>
                                <LogoText>
                                    Shortly
                                </LogoText>
                            </LogoContainer>
                        </ColumnLeft>
                        <ColumnRight>
                            <RightItems>
                                <TopItems>
                                    Features
                                </TopItems>
                                <BottomItems to='/'>
                                    Link Shortening
                                </BottomItems>
                                <BottomItems to='/'>
                                    Branded Links
                                </BottomItems>
                                <BottomItems >
                                    Analytics
                                </BottomItems>
                            </RightItems>
                            <RightItems>
                                <TopItems>
                                    Resources
                                </TopItems>
                                <BottomItems to='/'>
                                    Blog
                                </BottomItems>
                                <BottomItems to='/'>
                                    Developers
                                </BottomItems>
                                <BottomItems to='/'>
                                    Support
                                </BottomItems>
                            </RightItems>
                            <RightItems>
                                <TopItems>
                                    Company
                                </TopItems>
                                <BottomItems to='/'>
                                    About
                                </BottomItems>
                                <BottomItems to='/'>
                                    Our Team
                                </BottomItems>
                                <BottomItems to='/'>
                                    Careers
                                </BottomItems>
                                <BottomItems to='/'>
                                    Contact
                                </BottomItems>
                            </RightItems>
                            <IconItems>
                                <IconContainer>
                                    <FacebookIcon />
                                </IconContainer>
                                <IconContainer>
                                    <TwitterIcon />
                                </IconContainer>
                                <IconContainer>
                                    <PinterestIcon />
                                </IconContainer>
                                <IconContainer>
                                    <InstagramIcon />
                                </IconContainer>
                            </IconItems>
                        </ColumnRight>
                    </Row>
                </Container>

            </Background>
        </>
    )
}

export default Footer;
