import React from 'react'
import Styled from "styled-components"

const Section = Styled.div`
height:650px;
  background-color:#FFFCF7;
  text-align:center;
  padding-top:30px;
`
const Header = Styled.span`
font-size:35px;
  font-weight:600;
  font-family:Harmonia Sans;
`
const HeaderDescreption = Styled.p`
margin-top:-1px;
padding-top:10px;
font-family:Harmonia Sans;
`
const CardWrapper = Styled.div`
display:flex;
justify-content:space-evenly;
height:450px;
margin-top:50px;
`
const FirstCard = Styled.div`
padding:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:300px;
  height:300px;
  text-align:center;
  border:3px solid #9ACA38;
  background-color:#fbfdff;
  font-family:Harmonia Sans;
`
const SecondCard = Styled.div`
padding:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:300px;
  height:300px;
  text-align:center;
  border:3px solid #FD6D0F;
  background-color:#fbfdff;
  font-family:Harmonia Sans;
`
const ThirdCard = Styled.div`
padding:50px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:300px;
  height:300px;
  text-align:center;
  border:3px solid #FED697;
  background-color:#fbfdff;
  font-family:Harmonia Sans;
`

const FirstImage = Styled.div`
height:100px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon_Day_1.png?v=1600302123");
    background-repeat:no-repeat;
  background-position:center;`
const SecondImage = Styled.div`
height:100px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon_Day_2.png?v=1600302123");
    background-repeat:no-repeat;
  background-position:center;

`
const ThirdImage = Styled.div`
height:100px;
  background-image:url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon_Day_3.png?v=1600302123");
    background-repeat:no-repeat;
  background-position:center;
`
  const CardTitle = Styled.span`
  font-size:25px;
  font-weight:600;
  `
const CardDescreption = Styled.p`
padding-top:20px;
`


function FastingMimicking() {
    return (
        <>
<Section>
    <Header>The ProLon Fasting Mimicking Diet</Header>
    <HeaderDescreption><b>ProLon helps unlock the deepest level of fasting</b></HeaderDescreption>
    <HeaderDescreption>The program triggers “autophagy,” your body’s natural way of cleaning house.</HeaderDescreption>
    <HeaderDescreption>Your cells clean and recycle old and damaged parts, resulting in a profound benefit: cellular rejuvenation.
</HeaderDescreption>
<CardWrapper>
<FirstCard>
    <FirstImage></FirstImage>
    <CardTitle>Transforming to <br></br>
         a Fasting State</CardTitle>
         <CardDescreption>The body transitions to a fasting state & fat-burning mode, and begins preparation for cellular clean-up.</CardDescreption>
</FirstCard>
<SecondCard>
    <SecondImage></SecondImage>
<CardTitle>Fat Burning & <br></br>
         Ketogenesis</CardTitle>
         <CardDescreption>Fat-burning ramps up, contributing to the initiation of ketogenesis (ketone production). By the end of this day (48hrs), ketosis may occur.</CardDescreption>
</SecondCard>
<ThirdCard>
    <ThirdImage>
    </ThirdImage>
    <CardTitle>Autophagy <br></br>
         Clean Up State</CardTitle>
         <CardDescreption>Cellular clean-up (autophagy) begins. Fat-burning and ketone production/ utilization continues and increases.</CardDescreption>
</ThirdCard>
</CardWrapper>
</Section>
        </>
    )
}

export default FastingMimicking
