import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { IsBlock, IsDrink, IsSmoke, MyPageDataState, MyPageJob, MyPageMBTI, MyPageReligion, MyPageSelfIntro, MypageUserHeight } from "../../pages/User/MyPage/MyPageState";
import api from "../../apis/Api";

interface SidebarProps {
  menu: string;
  bg: string;
}

const Sidecom = styled.button`
  width: 15vh;
  height: 6vh;
  opacity: 1;
  border-style: solid;
  border-color: #000000;
  border-radius: 10px;
  border-width: 0.3vh;
  justify-content: center;
  align-items: center;
`;

const MyPageSideTab: React.FC<SidebarProps> = ({ menu, bg }) => {
    const [myPageData, setmyPageData] = useRecoilState(MyPageDataState);
    const [myPageUserHeight, setMyPageUserHeight] = useRecoilState(MypageUserHeight);
    const [myPageSelfIntro, setMySelfIntro] = useRecoilState(MyPageSelfIntro);
    const [myPageMBTI, setMyPageMBTI] = useRecoilState(MyPageMBTI);
    const [myPageReligion, setMyPageReligion] = useRecoilState(MyPageReligion);
    const [myPageJob, setMyPageJob] = useRecoilState(MyPageJob);
    const [isSmoke, setIsSmoke] = useRecoilState(IsSmoke);
    const [isDrink, setIsDrink] = useRecoilState(IsDrink);
    const [isBlock, setIsBlock] = useRecoilState(IsBlock);

    const navigate = useNavigate();

    const GoMyPage = async () => {
        try {
            const response = await api.get('/user/mypage/test_bb1a270fbd30');
            console.log(response.data); 
            setmyPageData((prevMyPageData) => ({
                ...prevMyPageData,
                name: response.data.data.name,
                height: response.data.data.height,
                job: response.data.data.job,
                isBlockingFriend: response.data.data.blockingFriend,
                isSmoker: response.data.data.smoker,
                isDrinker: response.data.data.drinker,
                religion: response.data.data.religion,
                mbti: response.data.data.mbti,
                profilePictures: response.data.data.profilePictures,
                introduction: response.data.data.introduction,
                mileage: response.data.data.mileage,
                sido: response.data.data.sido,
                gugun: response.data.data.gugun,
                detail: response.data.data.detailAddress,
                latitude: 0,
                longitude: 0
            }));
            setMyPageUserHeight(response.data.data.height);
            setMySelfIntro(response.data.data.introduction);
            setMyPageMBTI(response.data.data.mbti);
            setMyPageReligion(response.data.data.religion);
            setMyPageJob(response.data.data.job);
            setIsSmoke(response.data.data.smoker);
            setIsDrink(response.data.data.drinker);
            setIsBlock(response.data.data.blockingFriend);
            
        } catch (error) {
            console.error(error);
            alert('오류가 발생했습니다.')
        }
        navigate("/mypage");
    };

    return (
        <div>
        <Sidecom onClick={GoMyPage} style={{ backgroundColor: `${bg}` }}>
            {menu}
        </Sidecom>
        </div>
    );
};

export default MyPageSideTab;
