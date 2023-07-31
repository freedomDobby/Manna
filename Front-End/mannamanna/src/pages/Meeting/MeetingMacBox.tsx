import styled from 'styled-components';
import { ReactNode } from 'react';

interface SmallMacBookProps {
  children: ReactNode;
  width: string;
  height: string;
  color1: string;
  color2: string;
  alignItems: string;
  Username:string;
  age:string;
  address:string;
}

function MeetingMacBox({children, width, height, color1, color2, alignItems,Username,age,address}: SmallMacBookProps) {
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

  let MidBox = styled.div`
    width: 100%;
    height: 90%;
    display:inline-block;
    border-top-left-radius: 3vh;
    border-top-right-radius: 3vh;
    background-color: ${color2};
    background-color: rgba(${parseInt(color2.slice(1, 3), 16)}, ${parseInt(color2.slice(3, 5), 16)}, ${parseInt(color2.slice(5, 7), 16)}, 0.5); 
    overflow: auto;
    flex-direction: column; 
    justify-content: center; 
    align-items: ${alignItems};
    font-size: 3vh;
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
    height: 15%;
    border-bottom-left-radius: 3vh;
    border-bottom-right-radius: 3vh;
    background-color: ${color1};
  `;

  let BtnBox = styled.div`
    width : 100%;
    height : 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 1vw;
  `
  return (
      <MacBox>
        <MidBox>
          {children}
          
        </MidBox>
        <BottomBox style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',justifyContent: 'center', alignItems: 'center', marginLeft:'1vw', marginRight:'1vw'}}>
                {Username}
            </div>
            <div style={{height:'100%', width:'70%',display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <BtnBox >
                    <div style={{ width:'30%', height:'100%' ,textAlign:'center',display:'flex', justifyContent:'center', alignContent:'center' }}> 
                        <div style={{ border:'solid 2px black', width:'55%', height:'98%', backgroundColor:'#f8e3ea', borderRadius:'50%', flexDirection: 'column',display:'flex', justifyContent:'center', alignContent:'center',textAlign:'center' }}>dd</div>
                    </div>
                    <div style={{ width:'30%', height:'100%' ,textAlign:'center',display:'flex', justifyContent:'center', alignContent:'center' }}> 
                        <div style={{ border:'solid 2px black', width:'55%', height:'98%', backgroundColor:'#f8e3ea', borderRadius:'50%', flexDirection: 'column',display:'flex', justifyContent:'center', alignContent:'center',textAlign:'center' }}>dd</div>
                    </div>
                    <div style={{ width:'30%', height:'100%' ,textAlign:'center',display:'flex', justifyContent:'center', alignContent:'center' }}> 
                        <div style={{ border:'solid 2px black', width:'55%', height:'98%', backgroundColor:'#f8e3ea', borderRadius:'50%', flexDirection: 'column',display:'flex', justifyContent:'center', alignContent:'center',textAlign:'center' }}>dd</div>
                    </div>
                    
                </BtnBox>
            </div>
        </BottomBox>
      </MacBox>
  );
}

export default MeetingMacBox;
