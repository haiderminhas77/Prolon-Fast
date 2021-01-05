import React from 'react'
import Styled from 'styled-components'

const Center = Styled.div`
display:flex;
justify-content:center;
align-itmes:center;
`

const ImageWapper = Styled.div`
width:80%;
height: 560px;
background-image: url("https://cdn.shopify.com/s/files/1/0126/2921/3243/files/ProLon_For_Me_-_Ornage_3024x.png?v=1600324658");
background-size: cover;
background-position: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 12px 6px;
}
`
const InnerParagraph = Styled.p`
height: 420px;
  display: flex;
  align-items: center;
  float: right;
  font-size: 50px;
  font-weight: 600;
  color: white;
  padding-right: 50px;
`


function BenifitSection() {
    return (
        <>
        <center>
      <ImageWapper>
          <InnerParagraph>
          What will you <br></br> benifit From?</InnerParagraph>
          </ImageWapper>
          </center> 
        </>
    )
}

export default BenifitSection
