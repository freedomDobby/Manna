import styled from 'styled-components'

export const ChatPeopleBox = styled.div`
    width: 90%;
    height: 10vh;
    background: white;
    border: solid 0.5vh black;
    border-radius: 2vh;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3vw;
    margin-bottom: 1vh;
`

export const LeftChatBox = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border: solid 0.5vh black;
    border-radius: 3vh 3vh 3vh 0vh;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const RightChatBox = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border: solid 0.5vh black;
    border-radius: 3vh 3vh 0vh 3vh;
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ChatProFile = styled.div`
    width: 3vw;
    height: 3vw;
    background : black;
    border-radius: 50%;
    margin: 1vh;
`;

export const ChatContainerBox = styled.div`
    border: solid 5px black;
    background-color : white;
    width: 140vh;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const ChatLeftStyle = styled.div`
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 1vh 3vw 1vh 0.5vw;
`

export const ChatRightStyle = styled.div`
    width: 80%;    
    display: flex;
    justify-content: end;
    align-items: center;
    margin: 1vh 0.5vw 1vh 3vw;
`

export const ChatInBox = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
`

export const ChatPeopleOutBox = styled.div`
    height: 100%;
    overflow: auto;
    margin-top: 1vh;
`

export const ChatOutBox = styled.div`
    height: 85%;
    overflow: auto;
`

export const ChatInputBox = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15%;
`

export const CircularImageContainer = styled.div`
width: 3vw;
  height: 3vw;
  border-radius: 24%;
  margin: 1vh;
  overflow: hidden;
  border: 1px solid black;
  background-size: cover;
`;

export const CircularImage = styled.img`
width: 100%;
height: 100%;
`;


