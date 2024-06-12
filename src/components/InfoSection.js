import React from 'react';
import { Button } from './Button';
import { Section, ColumnLeft, Container, ColumnRight } from './InfoSectionElements';
import ImageFour from '../images/ImageFour.jpg';


const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonlabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true">
                       {buttonlabel}
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={ImageFour} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection;
