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

export default function SelectionObj2() {
  const [sogaetingFilter, setSogaetingFilter] = useRecoilState(SogaetingFilterAtom);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value === "true"; 
    await setSogaetingFilter((prevFilter) => ({
      ...prevFilter,
      isDrinker: newValue,
    }));
  };

  return (
    <SelectBoxWrapper>
      <select
        defaultValue={sogaetingFilter.isDrinker? "true" : "false"}
        value={sogaetingFilter.isDrinker ? "true" : "false"}
        onChange={handleChange}
        style={{height:'3rem', margin:'1rem'}}
      >
        <option value="true"> 음주</option>
        <option value="false"> 비음주</option>
      </select>
    </SelectBoxWrapper>

    // <FormControl
    //   sx={{
    //     mr: 3,
    //     ml: 3,
    //     mt: 2,
    //     mb: 2,
    //     // minWidth: 120,
    //     border: "0.2vw solid black",
    //     backgroundColor: "white",
    //     borderRadius: "5vw",
    //   }}
    // >
    //   <InputLabel id="demo-simple-select-helper-label">음주</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-helper-label"
    //     id="demo-simple-select-helper"
    //     value={sogaetingFilter.isDrinker ? "true" : "false"}
    //     label="음주"
    //     onChange={handleChange}
    //   >
    //     <MenuItem  value={"true"}>음주</MenuItem>
    //     <MenuItem value={"false"}>비음주</MenuItem>
    //   </Select>
    // </FormControl>
  );
}
