import React from 'react'
import styled from 'styled-components'
import Section from './Section';


const Container = styled.div`
${'' /* height:100vh; */}
`;

const Home = () => {
    return (
        <Container>

            <Section
                tittle="Model S"
                description="Order Online For Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                background="model-s.jpg"
            />
            <Section
                tittle="Model Y"
                description="Starting at $40,240"
                description1="After Federal Tax Credit"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                background="model-y.jpg"
            />
            <Section
                tittle="Model X"
                description="Order Online For Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                background="model-x.jpg"
            />
            <Section
                tittle="Model 3"
                description="Starting at $32,740"
                description1="After Federal Tax Credit"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
                background="model-3.jpg"
            />

            <Section
                tittle="Solar Panels"
                link="Schedule a Virtual Consultation"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                background="solar-panel.jpg"
            />
            <Section
                tittle="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                background="solar-roof.jpg"
            />
            <Section
                tittle="PowerWall"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
                background="Powerwall.jpg"
            />
            <Section
                tittle="Accessories"
                rightBtnText="Shop Now"
                background="accessories.jpg"
            />
        </Container>
    )
}

export default Home