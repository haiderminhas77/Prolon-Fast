import React from 'react'
import Styled from 'styled-components'


const SectionWrapper = Styled.div`
margin-top:20px;
margin-bottom:20px;
height:450px;
`
const Title = Styled.span`
display:flex;
  align-items:center;
  justify-content:center;
  padding-top:30px;
 padding-bottom:30px;
 font-size:30px;
  font-weight:600;
  font-family:Harmonia Sans;
`
const CardWrap = Styled.div`
display:flex;
padding-left:40px;
  padding-right:40px;
`
const Card = Styled.div`
flex:1;
  height:200px;
  text-align:center;
`

const FirstImage = Styled.div`
height:150px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon-Atom-Compressed.gif?v=1600326408");
  background-position:center;
  background-size:100px;
  background-repeat:no-repeat;
`
const SecondImage = Styled.div`
height:150px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon-DNA-Compressed.gif?v=1600327237");
  background-position:center;
  background-size:100px;
  background-repeat:no-repeat;
`
const ThirdImage = Styled.div`
height:150px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon-Accelerate-Compressed.gif?v=1600327435");
  background-position:center;
  background-size:100px;
  background-repeat:no-repeat;
`
const FourthImage = Styled.div`
height:150px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon-OnTarget-Compressed.gif?v=1600327658");
  background-position:center;
  background-size:100px;
  background-repeat:no-repeat;
`
const CardTitle = Styled.span`
font-size:25px;
  font-weight:600;
  font-family:Harmonia Sans;
`
const CardDescreption = Styled.p`
margin-top:20px;
font-family:Harmonia Sans;
`


function UnlockTransformation() {
    return (
        <>
<SectionWrapper>
    <Title>Unlock the Transformative Benefits of the Fasting Mimicking Diet®</Title>
    <CardWrap>
 <Card>

     <FirstImage></FirstImage>
     <CardTitle>Healthy<br></br>
Aging</CardTitle>
<CardDescreption>Triggers the natural process of cleaning and rejuvenation of your cells, which supports healthy aging.</CardDescreption>
 </Card>
<Card>
    <SecondImage></SecondImage>
<CardTitle>Kickstart <br></br>
Healthy Habits</CardTitle>
<CardDescreption>Change your relationship with food, reduce your food cravings and gain better portion control.</CardDescreption>
</Card>
<Card>
    <ThirdImage></ThirdImage>
<CardTitle>Enhance <br></br>
Performance</CardTitle>
<CardDescreption>
Improve your mental clarity, focus, and energy.
</CardDescreption>
</Card>
<Card>
    <FourthImage></FourthImage>
    <CardTitle>Weight Loss <br></br>
Results</CardTitle>
<CardDescreption>Kickstart weight loss (on average 5 pounds), especially belly fat, while protecting lean body mass.</CardDescreption>
</Card>
</CardWrap>
</SectionWrapper>


        </>
    )
}

export default UnlockTransformation
