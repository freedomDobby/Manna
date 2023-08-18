// GlobalFont.ts
import { createGlobalStyle } from 'styled-components';
// 각 폰트 파일 import
import Font_Main from '../asset/font/neodgm.woff';

export default createGlobalStyle`
    @font-face {
        font-family: "Font_test";
        src: local("Font_test"), url(${Font_Main}) format('woff'); 
        font-weight: lighter;
    }

`;