import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { isNonNullExpression } from "typescript";
import { useRecoilState } from "recoil";
import { SogaetingFilterAtom } from "../../../../Recoil/State";

export default function SelectionObj3() {
  const [sogaetingFilter, setSogaetingFilter] = useRecoilState(SogaetingFilterAtom);

  const handleChange = async (event: SelectChangeEvent) => {
    const newValue = event.target.value; 
    console.log(newValue);
    await setSogaetingFilter((prevFilter) => ({
      ...prevFilter,
      religion: newValue,
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
      <InputLabel id="demo-simple-select-helper-label">종교</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={sogaetingFilter.religion || "무교"}
        label="종교"
        onChange={handleChange}
      >
        <MenuItem value={"기독교"}>기독교</MenuItem>
        <MenuItem value={"천주교"}>천주교</MenuItem>
        <MenuItem value={"불교"}>불교</MenuItem>
        <MenuItem value={"무교"}>무교</MenuItem>
      </Select>
    </FormControl>
  );
}
