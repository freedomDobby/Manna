
import styled from "styled-components";
import reserveLogo from "../../components/common/reserveLogo.png"
import wingHart from "../../components/common/wingHart.png"

const BigContainer = styled.div `
height:87vh;
width: 100vw;
// border: 2px solid red;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const TopContainer = styled.div `
height:30%;
width: 100%;
// border: 1px solid blue;
display: flex;
justify-content: center;
align-items: center; 
`
const TopSide = styled.div `
height:100%;
width: 15%;
// border: 1px solid orange;
`
const LogoBox = styled.div `
height:30%;
width: 100%;
// border: 1px solid black;
display: flex;
justify-content: space-around;
align-items: center; 
`
const Logo = styled.div `
height:100%;
width: 25%;
background-image:url(${reserveLogo});
background-size:100% 100%;
// border: 2px solid red;
`
const LogoFont = styled.div`
color: white;
WebkitTextStrokeWidth: '0.5px';
WebkitTextStrokeColor: '#d9cff4';
text-align: center;
font-size: 3em;
`
const UserContainer = styled.div `
height:90%;
width: 25%;
background-color: black;
// margint-left: 2%
color: white;
`

const TimerContainer = styled.div `
height: 100%;
width: 15%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`
const Hart = styled.div`
height: 38%;
width: 47%;
background-image:url(${wingHart});
background-size:100% 100%;
`
const MidContainer = styled.div `
height:5%;
width: 100vw;
`

const BottomContainer = styled.div `
height:65%;
width: 100vw;
// border: 1px solid blue;
display: flex;
justify-content: center;
align-items: center; 
`
const MapBox = styled.div`
border: solid 5px black;
background-color : white;
width: 140vh;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
`
const Select = styled.div`
width: 100%;
height: 10%;
border: 1px solid green;
display: flex;
`

const FlexBox = styled.div`
display: flex;
justify-content: center;
align-items: center; 
width: 100%;
height: 90%;
`
const Map = styled.div`
width: 50%;
height: 90%;
border: 1px solid red;
`
const Board = styled.div` 
width: 50%;
height: 90%;
border: 1px solid red;
`

export {
    BigContainer,
    TopContainer,
    MidContainer,
    BottomContainer,
    TopSide,
    UserContainer,
    TimerContainer,
    LogoBox,
    Logo,
    LogoFont,
    Hart,
    MapBox,
    FlexBox,
    Map,
    Board,
    Select
};