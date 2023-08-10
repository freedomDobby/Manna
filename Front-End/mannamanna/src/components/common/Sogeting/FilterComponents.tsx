import {
  ProfileContaine,
  DetailProfile,
  DetailText,
  UnderBar,
  Online,
  Profile,
  DetailBox1,
  DetailInfo,
  DetailBox2,
} from "../../../pages/Soagaeting/SoagaetinStyle";
import OfflineBox from "../OfflineBtn";
import OnlineBox from "../OnlineBtn";
import BtnBox, { BtnContainer } from "./BtnBox";
import ChooseBtn from './button/chooseBtn';

interface FilterProps {
  name: string;
  age: number;
  height: number;
  location: string;
  selfPR: string;
  smoke: string;
  alchol: string;
  mbti: string;
  profilePicture: string;
  isOnline:boolean;
  onApplicationClick: () => void;
  onReportClick: () => void;
  onMessageClick: () => void;
}
// const UserProfile = "https://i9b205.p.ssafy.io/img/jaeeitest_hyunjin.jpg";
const FilterComponent: React.FC<FilterProps> = ({
  name,
  age,
  height,
  location,
  selfPR,
  smoke,
  alchol,
  mbti,
  profilePicture,
  isOnline,
  onApplicationClick,
  onReportClick,
  onMessageClick,
}) => {
  return (
    <ProfileContaine>
      {/* hover시 보여지는 Detail프로필 */}
      <DetailProfile>
        <DetailText>
          <DetailBox1>
            <DetailInfo>{name}</DetailInfo>
            <DetailInfo>{age}살 </DetailInfo>
            <DetailInfo>{height} cm</DetailInfo>
            <DetailInfo>{location}</DetailInfo>
          </DetailBox1>
          <DetailBox2>{selfPR}</DetailBox2>
          <DetailBox1>
            <DetailInfo># {smoke}</DetailInfo>
            <DetailInfo># {alchol}</DetailInfo>
            <DetailInfo># {mbti} </DetailInfo>
          </DetailBox1>
        </DetailText>
      </DetailProfile>
      {/* default로 보여지는 프로필 */}
      {/* <Profile style={{ backgroundImage: `url(${UserProfile})` }}> */}

      <Profile style={{ backgroundImage: `url( ${profilePicture} )` }}>
        {/* <Profile
        style={{
          backgroundImage: `url("https://i9b205.p.ssafy.io/img/jaeeitest_hyunjin.jpg")`,
        }}
      > */}
         {isOnline ? (
          <UnderBar>
            <Online>
              <OnlineBox />
            </Online>
            <BtnContainer>
            <ChooseBtn onClick={onApplicationClick}>신청</ChooseBtn>
          <ChooseBtn onClick={onReportClick}>신고</ChooseBtn>
          <ChooseBtn onClick={onMessageClick}>쪽지</ChooseBtn>
    </BtnContainer>
          </UnderBar>
        ) : (
          <UnderBar>
            <OfflineBox />
            <BtnContainer>
         <ChooseBtn onClick={onApplicationClick}>신청</ChooseBtn>
          <ChooseBtn onClick={onReportClick}>신고</ChooseBtn>
          <ChooseBtn onClick={onMessageClick}>쪽지</ChooseBtn>
    </BtnContainer>
          </UnderBar>
        )}
      </Profile>
    </ProfileContaine>
  );
};

export default FilterComponent;
