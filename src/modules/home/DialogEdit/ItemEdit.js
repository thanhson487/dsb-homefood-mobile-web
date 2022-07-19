import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import React from "react";
import { CustomTitle } from "./styled";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-around",
        
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "15px",
        },
      },
    },
  },
});

function ItemEdit(props) {
  const [value, setValue] = React.useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="mt-3">
        <CustomTitle>Thứ 4 - Ngày 26/07/2022</CustomTitle>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="1"
              control={
                <Radio
                  sx={{
                    "&, &.Mui-checked": {
                      color: "#ff9500",
                    },
                  }}
                />
              }
              label={<Typography sx={{ color: "#5fad5f" }}>Cơm</Typography>}
            />
            <FormControlLabel
              value="2"
              control={
                <Radio
                  sx={{
                    "&, &.Mui-checked": {
                      color: "#ff9500",
                    },
                  }}
                />
              }
              label={<Typography sx={{ color: "#5fad5f" }}>Trộn</Typography>}
            />
          </RadioGroup>
        </FormControl>
        <hr />
      </div>
    </ThemeProvider>
  );
}

export default ItemEdit;
