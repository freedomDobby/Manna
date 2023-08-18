import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

export default function InputSlider() {
  const [value, setValue] = React.useState<number>(170);

  const handleSliderChange = (_event:Event,newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          {value}
        </Grid>
        <Grid item xs>
          <Slider
            onChange={handleSliderChange}
            value={value}
            min={130}
            max={210}
            aria-labelledby="input-slider"
            sx={{
              color: "#F8E3EA"
            }}
          />
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Box>
  );
}
