import React from 'react';
import { Background, TitleContainer, Title, BackgroundImg } from './getStart.styles'
import { Button, Container } from '../../globalStyles'

const GetStart = () => {

    return (
        <>
            <Background>
                <BackgroundImg>
                    <Container>
                        <TitleContainer>
                            <Title>
                                Boost your links today
                            </Title>
                            <Button round style={{ width: '150px', marginTop: '1rem' }}>Get Started</Button>
                        </TitleContainer>
                    </Container>
                </BackgroundImg>
            </Background>
        </>
    )
}

export default GetStart;
