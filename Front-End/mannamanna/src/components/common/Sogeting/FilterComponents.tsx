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
import BtnBox from "./BtnBox";

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
}

const FilterComponent: React.FC<FilterProps> = ({
  name,
  age,
  height,
  location,
  selfPR,
  smoke,
  alchol,
  mbti,
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
      <Profile style={{ backgroundImage: `url("{profilePicture}")` }}>
        <UnderBar>
          <Online>
            <OnlineBox />
            <OfflineBox />
          </Online>
          <BtnBox />
        </UnderBar>
      </Profile>
    </ProfileContaine>
  );
};

export default FilterComponent;
