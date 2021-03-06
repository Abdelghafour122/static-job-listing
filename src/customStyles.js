import { makeStyles } from "@mui/styles";
import theme from "./styles";

const useStyles = makeStyles({
  jobBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px",
    [theme.breakpoints.down("md")]: {
      flexDirection: " column",
      alignItems: "flex-start",
      padding: "15px",
    },
  },
  positionHead: {
    color: "#2c3a3a",
    transition: "0.3s",
    fontSize: "17px",
    "&:hover": {
      color: "hsl(180, 29%, 50%)",
    },
  },
  filterButton: {
    backgroundColor: "#eef6f6",
    "&:hover": {
      backgroundColor: "hsl(180, 29%, 50%)",
      color: "white",
    },
  },
  infoCont: {
    color: "grey",
    display: "flex",
    alignItems: "center",
    "& > *:not(:last-of-type)": {
      marginRight: "30px",
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        right: "-17px",
        top: "calc(50% - 2px)",
        height: "4px",
        width: "4px",
        borderRadius: "50%",
        backgroundColor: "grey",
      },
    },
  },
  buttonStack: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      gap: "20px",
    },
  },
});

export default useStyles;
