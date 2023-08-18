import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRecoilState } from "recoil";
import { SogaetingFilterAtom } from "../../../../Recoil/State";
import { SelectBoxWrapper } from "../../../../pages/User/MyPage/MyPageStyles";

export default function SelectionObj() {
  const [sogaetingFilter, setSogaetingFilter] = useRecoilState(SogaetingFilterAtom);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value === "true"; 
    await setSogaetingFilter((prevFilter) => ({
      ...prevFilter,
      isSmoker: newValue,
    }));
  };

  return (
    <SelectBoxWrapper>
      <select
        defaultValue={sogaetingFilter.isSmoker? "true" : "false"}
        value={sogaetingFilter.isSmoker ? "true" : "false"}
        onChange={handleChange}
        style={{height:'3rem', margin:'1rem'}}
      >
        <option value="true"> 흡연</option>
        <option value="false"> 비흡연</option>
      </select>
    </SelectBoxWrapper>
    // <FormControl
    //   sx={{
    //     m: 3,
    //     border: "0.2vw solid black",
    //     backgroundColor: "#f8e3ea",
    //     borderRadius: "1rem",
    //   }}
    // >
    //   <Select
    //     value={sogaetingFilter.isSmoker ? "true" : "false"} // Convert boolean to string
    //     label="흡연"
    //     onChange={handleChange}
    //     sx={{
          
    //     }}
    //   >
    //     <MenuItem value={"true"}>흡연</MenuItem>
    //     <MenuItem value={"false"}>비흡연</MenuItem>
    //   </Select>
    // </FormControl>
  );
}
