import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// type ReligionProps = {}; type MbtiProps = {};

const Religion = () => {
  const [religion, setReligion] = React.useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setReligion(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: "50%" }}>
      <InputLabel id="demo-simple-select-helper-label"> 종교</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={religion}
        label="종교"
        onChange={handleChange}
      >
        <MenuItem value={0}> 기독교</MenuItem>
        <MenuItem value={1}> 천주교</MenuItem>
        <MenuItem value={2}> 불교</MenuItem>
        <MenuItem value={3}> 무교</MenuItem>
      </Select>
    </FormControl>
  );
};

const Mbti = () => {
  const [MBTI, setMBTI] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setMBTI(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: "50%" }}>
      <InputLabel id="demo-simple-select-helper-label"> MBTI</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={MBTI}
        label="MBTI"
        onChange={handleChange}
      >
        <MenuItem value={0}> ISTJ</MenuItem>
        <MenuItem value={1}> ISFJ</MenuItem>
        <MenuItem value={2}> INFJ</MenuItem>
        <MenuItem value={3}> INTJ</MenuItem>
        <MenuItem value={4}> ISTP</MenuItem>
        <MenuItem value={5}> ISFP</MenuItem>
        <MenuItem value={6}> INFP</MenuItem>
        <MenuItem value={7}> INTP</MenuItem>
        <MenuItem value={8}> ESTP</MenuItem>
        <MenuItem value={9}> ESFP</MenuItem>
        <MenuItem value={10}> ENFP</MenuItem>
        <MenuItem value={11}> ENTP</MenuItem>
        <MenuItem value={12}> ESTJ</MenuItem>
        <MenuItem value={13}> ESFJ</MenuItem>
        <MenuItem value={14}> ENFJ</MenuItem>
        <MenuItem value={15}> ENTJ</MenuItem>
      </Select>
    </FormControl>
  );
};

const Job = () => {
  const [Job, setJob] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setJob(event.target.value as string);
  };

  return (
    <FormControl sx={{ width: "50%" }}>
      <InputLabel id="demo-simple-select-helper-label"> 직업</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={Job}
        label="Job"
        onChange={handleChange}
      >
        <MenuItem value={0}> 경영·사무·금융·보험직</MenuItem>
        <MenuItem value={1}> 연구직 및 공학 기술직</MenuItem>
        <MenuItem value={2}> 교육·법률·사회복지·경찰·소방직 및 군인</MenuItem>
        <MenuItem value={3}> 보건·의료직</MenuItem>
        <MenuItem value={4}> 예술·디자인·방송·스포츠직</MenuItem>
        <MenuItem value={5}> 미용·여행·숙박·음식·경비·청소직</MenuItem>
        <MenuItem value={6}> 영업·판매·운전·운송직</MenuItem>
        <MenuItem value={7}> 건설·채굴직</MenuItem>
        <MenuItem value={8}> 설치·정비·생산직</MenuItem>
        <MenuItem value={9}> 농림·어업직</MenuItem>
        <MenuItem value={10}> IT 기술직</MenuItem>
      </Select>
    </FormControl>
  );
};

export { Religion, Mbti, Job };
