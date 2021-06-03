import React from 'react';
import { CardContainer, CardImg, Img, CardTexts, CardTitle, CardDescription } from './card.styles'


const Card = ({ ImgUrl, ImgAlt, Title, Description }) => {

    return (

        <CardContainer>
            <CardImg>
                <Img src={ImgUrl} alt={ImgAlt} />
            </CardImg>
            <CardTexts>
                <CardTitle>
                    {Title}
                </CardTitle>
                <CardDescription>
                    {Description}
                </CardDescription>
            </CardTexts>
        </CardContainer>

    )
}

export default Card;
