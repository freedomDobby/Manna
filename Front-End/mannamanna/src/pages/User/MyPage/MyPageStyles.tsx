import Button from '@mui/material/Button';

import { MileageBox, LeftStyle, RightStyle } from './MyPageStyle';

type MyPageButtonProps = {
    children: string;
    onClick: () => void;
};
  
export const MyPageButton = ({ children, onClick }: MyPageButtonProps) => {
    return(
        <Button
        sx={{
            width: '15vw', 
            height: '10vh',
            margin: '1vh',
            backgroundColor: '#ffcced',
            border: '0.3vw solid #000',
            borderRadius: 3,
            color:'common.black',
            borderColor: "ffcced",
            fontSize: '2.5vh',
            fontFamily:'inherit',
            '&:hover': { backgroundColor: '#f8e3ea' },
        }}
        variant="contained"
        onClick={onClick}
        >{children}</Button>
    )
}

export const MyPageModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '0.3vw solid #000',
    borderRadius: 4,
    p: 4,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center', 
    alignItems: 'center',
};

export function UseMileage(){
    return(
        <LeftStyle>
            시간시간시간
            <MileageBox>-50 Point 쪽지 보내기</MileageBox>
        </LeftStyle>
    );
}

export function GetMileage(){
    return(
        <RightStyle>
            시간시간시간
            <MileageBox>+50 Point 미션 참여</MileageBox>
        </RightStyle>
    );
}

export function SogeList(){
    return(
        <LeftStyle>
            <MileageBox>소개팅소개팅소개팅</MileageBox>
        </LeftStyle>
    );
}

export function MeetList(){
    return(
        <RightStyle>
            <MileageBox>미팅미팅미팅</MileageBox>
        </RightStyle>
    );
}