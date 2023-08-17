import MacBookBox from "../../../components/common/macbookBox";
import {
  DrinkCustomSwitch,
  JobSelectBox,
  MBTISelectBox,
  MyPageGuGun,
  MyPagePassButton,
  MyPageSido,
  MyPageTextArea,
  MyPageUserHeightSlider,
  ReligionSelectBox,
  SaveChangeButton,
  SmokeCustomSwitch,
} from "./MyPageStyles";
import { ModifyLocal } from "./MyPageModal/ModifyLocal";
// import { EnterImage } from "../Register/Image/EnterImageModal";
import {
  BasicInformation,
  BasicTitle,
  DetailInfomation,
  DetailSpace,
  ModifyBox,
  ModifyModal,
  ModifyModal1,
  ModifySave,
  ModifySelfPr,
  ModifySpace,
  ModifyWhat,
  PictureInfomation,
} from "./MyPageModifyStyle";
import { ModifyPic } from "./MyPageStyle";
import { ModifyProfile } from "../../../components/common/Profile";
import { GuGun } from "../Register/Address/EnterGuGun";
import { EnterImage } from "../Register/Image/EnterImageModal";

function MyPageModify() {
  return (
    <MacBookBox
      width="60%"
      height="90%"
      color1="#bcd3ff"
      color2="#ffffff"
      alignItems="center"
    >
      <BasicInformation>
        <BasicTitle>기본정보</BasicTitle>
        <ModifyBox>
          <ModifySpace>
            <ModifyWhat text="비밀번호" />
            <ModifyModal>
              <MyPagePassButton>변경하러가기</MyPagePassButton>
            </ModifyModal>
          </ModifySpace>
          <ModifySpace>
            <ModifyWhat text="주소" />
            <ModifyModal>
              {/* <ModifyLocal /> */}
              <MyPageSido />
              <MyPageGuGun />
            </ModifyModal>
          </ModifySpace>
          <ModifySpace>
            <ModifyWhat text="키" />
            <ModifyModal>
              <MyPageUserHeightSlider />
            </ModifyModal>
          </ModifySpace>
          <ModifySpace>
            <ModifyWhat text="직업" />
            <ModifyModal>
              <JobSelectBox />
            </ModifyModal>
          </ModifySpace>
        </ModifyBox>
      </BasicInformation>

      <DetailInfomation>
        <BasicTitle>세부정보</BasicTitle>
        <ModifyBox>
          <DetailSpace>
            <ModifyWhat text="흡연" />
            <ModifyModal1>
              <SmokeCustomSwitch />
            </ModifyModal1>
            <ModifyWhat text="음주" />
            <ModifyModal1>
              <DrinkCustomSwitch />
            </ModifyModal1>
          </DetailSpace>
          <DetailSpace>
            <ModifyWhat text="종교" />
            <ModifyModal1>
              <ReligionSelectBox />
            </ModifyModal1>
            <ModifyWhat text="MBTI" />
            <ModifyModal1>
              <MBTISelectBox />
            </ModifyModal1>
          </DetailSpace>
        </ModifyBox>
      </DetailInfomation>
      <PictureInfomation>
        <BasicTitle>사진등록</BasicTitle>
        <ModifyPic>
          <ModifyProfile />
          {/* <EnterImage>사진 등록하기</EnterImage> */}
        </ModifyPic>
      </PictureInfomation>
      <ModifySelfPr>
        <BasicTitle>자기소개</BasicTitle>
        <ModifyBox>
          <div style={{ width: "100%" }}>
            <MyPageTextArea />
          </div>
        </ModifyBox>
      </ModifySelfPr>
      <ModifySave>
        <SaveChangeButton>저장하기</SaveChangeButton>
      </ModifySave>
    </MacBookBox>
  );
}

export default MyPageModify;
