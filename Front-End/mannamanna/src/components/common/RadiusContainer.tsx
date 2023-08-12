import styled from 'styled-components'



const RadiusContainerBox = styled.div`
border: solid 0.5vh black;
background-color : white;
width: 150vh;
height: 80vh;
border-top-left-radius:  3.5vh; 
border-top-right-radius: 3.5vh;
border-bottom-left-radius:  3.5vh; 
border-bottom-right-radius: 3.5vh;
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 
&::-webkit-scrollbar {
    width: 0.7vw;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5vh;
  }
`

export default RadiusContainerBox;