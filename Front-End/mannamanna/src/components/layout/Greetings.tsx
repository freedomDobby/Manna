import styled from 'styled-components'
import Logo from '../common/Logo';
import Profile from '../common/Profile';
import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useRecoilState } from 'recoil';
import { nameAtom } from '../../Recoil/State';
import {  useNavigate } from 'react-router-dom';

const HeaderBack = styled.div`
    width: 100%;
    height: 10vh;
    background-color :rgba(255, 255, 255, 0.35) ;
    // opacity:0.35;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function Greetings(){
    const [name] = useRecoilState(nameAtom);
    const navigate=useNavigate();
    const GoResponseNote = () => {
        navigate("/note");
      };
    return(
        <div>
            <HeaderBack>
                <Logo/>
                <div style={{display:'flex', alignItems:'center'}}>
                    {/* <Profile></Profile> */}
                    <div style={{fontSize:'large'}}>{name}님</div>
                    <IconButton color="primary" size="large" onClick={GoResponseNote}>
                        <EmailOutlinedIcon fontSize="large"/>
                    </IconButton>
                    <IconButton color="primary" size="large" >
                        <NotificationsNoneOutlinedIcon fontSize="large"/>
                    </IconButton>
                    <IconButton color="primary" size="large">
                        <LogoutOutlinedIcon fontSize="large"/>
                    </IconButton>
                </div>
            </HeaderBack>
        </div>
    );
}



export default Greetings;