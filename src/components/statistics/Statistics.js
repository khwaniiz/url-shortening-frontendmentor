import React from 'react';
import { Background, TextContainer, Title, SubTitle, CardsContainer, CardTwo, CardThree, Line } from './statistics.styles'
import { Container } from '../../globalStyles'
import Card from '../card/Card'
import ShortenUrlForm from '../shortenUrlForm/ShortenUrlForm'

import BrandImg from '../../assets/icon-brand-recognition.svg'
import DetailImg from '../../assets/icon-detailed-records.svg'
import CustomizeImg from '../../assets/icon-fully-customizable.svg'

const brand = {
    ImgAlt: 'icon-brand-recognition',
    Title: 'Brand Recognition',
    Description: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in you content.`
}

const detail = {
    ImgAlt: 'icon-detailed-records',
    Title: 'Detailed Records',
    Description: `Gain insights into who is clicking your links. Knowing when and where 
    people engage with your content helps inform better decisions..`
}

const customizable = {
    ImgAlt: 'Fully Customizable',
    Title: 'Brand Recognition',
    Description: `Improve brand awareness and content discoverability through customizable 
    links, supercharging audience engagement.`
}

const Statistics = () => {

    return (
        <>
            <Background>
                <Container>
                    <ShortenUrlForm />
                    <TextContainer>
                        <Title>
                            Advanced Statistics
                        </Title>
                        <SubTitle>
                            Track how your links are performing across the web with our
                            advanced statistics dashboard.
                        </SubTitle>
                    </TextContainer>
                    <CardsContainer>
                        <Line />
                        <div>
                            <Card {...brand} ImgUrl={BrandImg} />
                        </div>
                        <CardTwo>
                            <Card {...detail} ImgUrl={DetailImg} />
                        </CardTwo>
                        <CardThree>
                            <Card {...customizable} ImgUrl={CustomizeImg} />
                        </CardThree>
                    </CardsContainer>

                </Container>
            </Background>
        </>
    )
}

export default Statistics;
