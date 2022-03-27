import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: "Spartan",
    body1: {
      fontSize: 16,
      fontWeight: 700,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "capitalize",
    },
  },
});

export default theme;
