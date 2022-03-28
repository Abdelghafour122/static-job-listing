import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 29%, 50%)",
    },
    neutral: {
      buttBgc: "#effafa",
      filterTablets: "#eef6f6",
      dgCyan: "#7b8e8e",
      vdgCyan: "#2c3a3a",
    },
  },
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
