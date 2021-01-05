import { Center } from '@chakra-ui/react'
import React from 'react'
import Styled from 'styled-components'


const SectionWrapper = Styled.div`
display:flex;
  height:600px;
`
const BackgroundImage = Styled.div`
flex:2;
  height:600px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon_-_Open_Box_-_What_s_inside_30d94650-cc9d-4f13-9ad5-d9ebe997c5ae_1080x.png?v=1600302123");
  background-position:center;
  background-size:760px;
  background-repeat:no-repeat;
padding-left:20px;
`
const CardWrapper = Styled.div`
display:flex;
  align-items:center;
  flex:1;
`
const Card = Styled.div`
background-color:#FFFCF6;
  height:400px;
  margin-right:30px;
  padding:30px;
` 
const ColorGreen = Styled.span`
color:#9ACE8E;
font-family:Harmonia Sans;
`
const Title = Styled.span`
font-size:32px;
font-family:Harmonia Sans;
  font-weight:600;
`
const Paragraph = Styled.p`
line-height:22px;
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


function ImageWithText() {
    return (
        <>
     <SectionWrapper>
         <BackgroundImage></BackgroundImage>
         <CardWrapper>
             <Card>
                 <Title>How Does ProLon <ColorGreen>Work?</ColorGreen></Title>
                 <Paragraph>ProLon is unlike any other diet program. The tasty, specially designed food gives you essential nutrition but doesn’t activate your body’s food sensing system. In other words, you get to eat, but your body “thinks” it’s on a 5-day fast.<br></br>
<br></br>
Essentially, it’s a “fast with food.” If that sounds easier than fasting by starvation, that’s because it is.
<br></br>
          <br></br>
What makes ProLon so special is, simply put, the science. It’s based on over 20 years of scientific research sponsored by the National Institutes of Health and the USC Longevity Institute.</Paragraph>
                 <Button>ORDER NOW + FREE SHIPPING</Button>
             </Card>
         </CardWrapper>
     </SectionWrapper>
        </>
    )
}

export default ImageWithText
