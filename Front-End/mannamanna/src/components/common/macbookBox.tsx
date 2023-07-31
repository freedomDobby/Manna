import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface MacBookBoxProps {
  children: ReactNode;
  width: string;
  height: string;
  color1: string;
  color2: string;
  alignItems: string;
}

function MacBookBox({children, width, height, color1, color2, alignItems}: MacBookBoxProps) {
  let MacBox = styled.div`
    border: solid 7px black;
    width: ${width};
    height: ${height};
    border-radius: 4vh;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
  `;

  let UpBox = styled.div`
    border-bottom: solid 5px black;
    width: 100%;
    height: 5%;
    border-top-left-radius: 3vh;
    border-top-right-radius: 3vh;
    background-color: ${color1};
    display: flex;
    align-items: center;
    justify-content: end;
  `;

  let MidBox = styled.div`
    width: 100%;
    height: 92%;
    // display:inline-block;
    display: flex;
    background-color: ${color2};
    background-color: rgba(${parseInt(color2.slice(1, 3), 16)}, ${parseInt(color2.slice(3, 5), 16)}, ${parseInt(color2.slice(5, 7), 16)}, 0.5); 
    overflow: auto;
    flex-direction: column; 
    justify-content: center; 
    align-items: ${alignItems};
    // align-items: center;
    font-size: 3vh;
    // border: 3px solid red;
    &::-webkit-scrollbar {
      width: 0.5vw;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.5vh;
      background: rgba(${parseInt(color2.slice(1, 3), 16)}, ${parseInt(color2.slice(3, 5), 16)}, ${parseInt(color2.slice(5, 7), 16)}, 0.7); 
    }
  `;

  let BottomBox = styled.div`
    border-top: solid 5px black;
    width: 100%;
    height: 3%;
    border-bottom-left-radius: 3vh;
    border-bottom-right-radius: 3vh;
    background-color: ${color1};
  `;

  let MacBtnContainer = styled.div`
    width : 5vw;
    height : 4vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 1vw;
  `

  interface MacBtnProps {
    bg: string;
  }

  const MacBtn = styled.div<MacBtnProps>`
    background: ${props => props.bg};
    width: 2.5vh;
    height: 2.5vh;
    border-radius: 50%;
  `;

  return (
      <MacBox>
        <UpBox>
          <MacBtnContainer>
            <MacBtn bg="#fe5f57"/>
            <MacBtn bg="#febb2d"/>
            <MacBtn bg="#25c339"/>      
          </MacBtnContainer>
        </UpBox>
        <MidBox>
          {children}
        </MidBox>
        <BottomBox></BottomBox>
      </MacBox>
  );
}

export default MacBookBox;
