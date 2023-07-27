import React from 'react'
import { styled } from 'styled-components'



const Wrap = styled.div`
height:100vh;
background: ${props => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const ItemText = styled.div`
text-align:center;
padding-top: 4rem;

p{
    margin-top:1rem
}
animation: fadeBottom 2s;
`

const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-bottom:0.5rem;
`
const ButtonGroup = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap:2rem;
  @media (max-width:768px) {
  flex-direction: column;
  
 }

`
const LeftButton = styled.button`
background-color: rgba(23, 26, 32, 0.8);
  height: 2.5rem;
  width: 16rem;
  color: white;
  border: none;
  border-radius: 2rem;
  text-transform: uppercase;
  font-size: 12px;
  opacity:0.85;
  cursor: pointer;
 
`
const RightButton = styled(LeftButton)`
background-color: rgb(227,224,222);
color:black;
opacity:0.7
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
${'' /* overflow-y:hidden; */}
animation: bouncingBtn infinite 1.5s;
`

const Section = ({ tittle, description, leftBtnText, rightBtnText, background, description1, link, videoSrc }) => {
    return (
        <Wrap bgimg={background}>

            <ItemText>
                <h1>{tittle}</h1>
                <p>{description}</p>
                <span>{description1}</span>
                <a href="#">{link}</a>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    {leftBtnText &&
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    }

                    <RightButton>
                        {rightBtnText}
                    </RightButton>

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>

        </Wrap>
    )
}

export default Section