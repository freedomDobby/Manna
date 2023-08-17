import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { isNonNullExpression } from "typescript";
import { useRecoilState } from "recoil";
import { SogaetingFilterAtom } from "../../../../Recoil/State";
import { SelectBoxWrapper } from "../../../../pages/User/MyPage/MyPageStyles";

export default function SelectionObj4() {
  const [sogaetingFilter, setSogaetingFilter] = useRecoilState(SogaetingFilterAtom);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value; 
    await setSogaetingFilter((prevFilter) => ({
      ...prevFilter,
      mbti: newValue,
    }));
  };

  return (
    <SelectBoxWrapper>
      <select
        defaultValue={sogaetingFilter.mbti || "ISTJ"}
        value={sogaetingFilter.mbti || "ISTJ"}
        onChange={handleChange}
        style={{height:'3rem', margin:'1rem'}}
      >
        <option value="ISTJ">ISTJ</option>
        <option value="ISFJ">ISFJ</option>
        <option value="INFJ">INFJ</option>
        <option value="INTJ">INTJ</option>
        <option value="ISTP">ISTP</option>
        <option value="ISFP">ISFP</option>
        <option value="INFP">INFP</option>
        <option value="INTP">INTP</option>
        <option value="ESTP">ESTP</option>
        <option value="ESFP">ESFP</option>
        <option value="ENFP">ENFP</option>
        <option value="ENTP">ENTP</option>
        <option value="ESTJ">ESTJ</option>
        <option value="ESFJ">ESFJ</option>
        <option value="ENFJ">ENFJ</option>
        <option value="ENTJ">ENTJ</option>
      </select>
  </SelectBoxWrapper>
  //   <FormControl
  //     sx={{
  //       mr: 3,
  //       ml: 3,
  //       mt: 2,
  //       mb: 2,
  //       // minWidth: 120,
  //       border: "0.2vw solid black",
  //       backgroundColor: "white",
  //       borderRadius: "5vw",
  //     }}
  //   >
  //     <InputLabel id="demo-simple-select-helper-label">MBTI</InputLabel>
  //     <Select
  //       labelId="demo-simple-select-helper-label"
  //       id="demo-simple-select-helper"
  //       value={sogaetingFilter.mbti || "ISTJ"}
  //       label="MBTI"
  //       onChange={handleChange}
  //     >
  // <MenuItem value="ISTJ">ISTJ</MenuItem>
  // <MenuItem value="ISFJ">ISFJ</MenuItem>
  // <MenuItem value="INFJ">INFJ</MenuItem>
  // <MenuItem value="INTJ">INTJ</MenuItem>
  // <MenuItem value="ISTP">ISTP</MenuItem>
  // <MenuItem value="ISFP">ISFP</MenuItem>
  // <MenuItem value="INFP">INFP</MenuItem>
  // <MenuItem value="INTP">INTP</MenuItem>
  // <MenuItem value="ESTP">ESTP</MenuItem>
  // <MenuItem value="ESFP">ESFP</MenuItem>
  // <MenuItem value="ENFP">ENFP</MenuItem>
  // <MenuItem value="ENTP">ENTP</MenuItem>
  // <MenuItem value="ESTJ">ESTJ</MenuItem>
  // <MenuItem value="ESFJ">ESFJ</MenuItem>
  // <MenuItem value="ENFJ">ENFJ</MenuItem>
  // <MenuItem value="ENTJ">ENTJ</MenuItem>
  //     </Select>
  //   </FormControl>
  );
}
