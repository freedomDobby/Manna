import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { isNonNullExpression } from "typescript";
import { useRecoilState } from "recoil";
import { SogaetingFilterAtom } from "../../../../Recoil/State";

export default function SelectionObj4() {
  const [sogaetingFilter, setSogaetingFilter] = useRecoilState(SogaetingFilterAtom);

  const handleChange = async (event: SelectChangeEvent) => {
    const newValue = event.target.value; 
    console.log(newValue);
    await setSogaetingFilter((prevFilter) => ({
      ...prevFilter,
      mbti: newValue,
    }));
  };

  return (
    <FormControl
      sx={{
        mr: 3,
        ml: 3,
        mt: 2,
        mb: 2,
        // minWidth: 120,
        border: "0.2vw solid black",
        backgroundColor: "white",
        borderRadius: "5vw",
      }}
    >
      <InputLabel id="demo-simple-select-helper-label">MBTI</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={sogaetingFilter.mbti || "ISTJ"}
        label="MBTI"
        onChange={handleChange}
      >
  <MenuItem value="ISTJ">ISTJ</MenuItem>
  <MenuItem value="ISFJ">ISFJ</MenuItem>
  <MenuItem value="INFJ">INFJ</MenuItem>
  <MenuItem value="INTJ">INTJ</MenuItem>
  <MenuItem value="ISTP">ISTP</MenuItem>
  <MenuItem value="ISFP">ISFP</MenuItem>
  <MenuItem value="INFP">INFP</MenuItem>
  <MenuItem value="INTP">INTP</MenuItem>
  <MenuItem value="ESTP">ESTP</MenuItem>
  <MenuItem value="ESFP">ESFP</MenuItem>
  <MenuItem value="ENFP">ENFP</MenuItem>
  <MenuItem value="ENTP">ENTP</MenuItem>
  <MenuItem value="ESTJ">ESTJ</MenuItem>
  <MenuItem value="ESFJ">ESFJ</MenuItem>
  <MenuItem value="ENFJ">ENFJ</MenuItem>
  <MenuItem value="ENTJ">ENTJ</MenuItem>
      </Select>
    </FormControl>
  );
}
