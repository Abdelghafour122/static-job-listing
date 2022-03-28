import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  jobBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px",
  },
  positionHead: {
    color: "#2c3a3a",
    transition: "0.3s",
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
});

export default useStyles;
