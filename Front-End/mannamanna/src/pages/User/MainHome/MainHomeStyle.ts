/* eslint-disable import/no-anonymous-default-export */
import styled from 'styled-components'
import mainImage from '../../../components/common/mainImage.png'

const InnerBox = styled.div`
border: 2px solid red;
height: 100vh;
width: 100%;
`

const MidBox = styled.div`
display: flex;
height: 50%;
width: 100%;
`

const SmallBox = styled.div`
// border: 1px solid blue;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const SecondBox = styled.div`
background-image:url(${mainImage});
// background-color: #ece7f9;
height: 120%;
width: 90%;
// border: 1px solid green;
margin-top: 0%;

`

const CanlendarBox = styled.div`
height: 90%;
width: 90%;
border-radius: 5%;
background-color: #ece7f9;
border: 5px solid #f5e3ec;
display: flex;
justify-content: center;
align-items: center;
`



export  {InnerBox, SmallBox,MidBox,CanlendarBox,SecondBox} ;