import { Button } from "@mui/material";
import React from "react";
import useStyles from "../customStyles";

const FilterButton = ({ val, onAdd }) => {
  const classes = useStyles();
  return (
    <Button
      disableElevation
      className={classes.filterButton}
      onClick={() => {
        onAdd(val);
      }}
    >
      {" "}
      {val}{" "}
    </Button>
  );
};

export default FilterButton;
