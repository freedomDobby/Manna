import styled from 'styled-components'
import Logo from './Logo';
import Profile from './Profile';

import IconButton from '@mui/material/IconButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const HeaderBack = styled.div`
    width: 100%;
    height: 100px;
    background : #ffcced;
    opacity:0.35;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function Greetings(){
    return(
        <div>
            <HeaderBack>
                <Logo/>
                <div style={{display:'flex', alignItems:'center'}}>
                    <Profile></Profile>
                    <div style={{fontSize:'large'}}>차 은 우</div>
                    <IconButton color="primary" size="large">
                        <EmailOutlinedIcon fontSize="large"/>
                    </IconButton>
                    <IconButton color="primary" size="large">
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