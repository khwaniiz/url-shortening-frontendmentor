import React from 'react';
import { Background, Row, Column, TextContainer, ImgContainer, Title, SubTitle, Img, ButtonContainer } from './hero.styles'
import { Button, Container } from '../../globalStyles'
import ImgHero from '../../assets/illustration-working.svg'

const Hero = () => {

    return (
        <>
            <Background>
                <Container style={{ paddingRight: 0 }}>
                    <Row>
                        <TextContainer>
                            <Title>More than just shorter links</Title>
                            <Title></Title>
                            <SubTitle>Build your brand’s recognition and get detailed insights on how your links are performing.
                            </SubTitle>
                            <ButtonContainer>
                                <Button round>Get Started</Button>
                            </ButtonContainer>
                        </TextContainer>

                        <ImgContainer>
                            <Img src={ImgHero} alt='illustration-working' />
                        </ImgContainer>
                    </Row>
                </Container>
            </Background>
        </>
    )
}

export default Hero;

// style={{ backgroundImage: `url('${ImgHero}')` }}