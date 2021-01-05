import React from 'react'
import Styled from'styled-components'

const BackgroundImage = Styled.div`
display:flex;
align-items:center;
justify-content:center;
height:450px;
background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon_-Winter_Promotion_1944x.png?v=1607710858");
background-position:center;
background-size:cover;
`
const TextWrapper = Styled.div`
width:450px;
  text-align:center;
  font-family:Harmonia Sans;
`

const Label = Styled.label`
text-transform:uppercase;
  letter-spacing:4px;
  text-align:center;
  font-family:Harmonia Sans;
`
const TitleWrapper = Styled.p`
margin-top:10px;
font-family:Harmonia Sans;
`

const Title = Styled.span`
font-size:40px;
  font-weight:900;
  font-family:Harmonia Sans;
`
const ColorRed = Styled.span`
color:#DD0133;
font-family:Harmonia Sans;
`
const Paragraph = Styled.p`
letter-spacing:2px;
line-height:25px;
padding-bottom:10px;
font-weight:400;
font-family:Harmonia Sans;
`
const Button = Styled.button`
margin-top:10px;
  height:40px;
  width:300px;
  border:none;
  color:white;
  font-weight:600;
  letter-spacing:2px;
  background-color:#DD0133;
  font-family:Harmonia Sans;
`


function ImageSection() {
    return (
        <>
          <BackgroundImage>
              <TextWrapper>
<Label>$25 Off ProLon® + 30 Free <br></br>Intermittent fasting bars</Label>
<TitleWrapper>
<Title>After Christmas <ColorRed>Sale</ColorRed></Title>
</TitleWrapper>
<Paragraph>5-days of ProLon Fasting Mimicking Diet® plus 30 of 
    <strong> The only Intermittent Fasting Bar </strong>- a  
    full month supply to support your intermittent fasting goals! </Paragraph>   
<Button>ORDER NOW + FREE SHIPPING</Button>
              </TextWrapper>
          </BackgroundImage>
        </>
    )
}

export default ImageSection
