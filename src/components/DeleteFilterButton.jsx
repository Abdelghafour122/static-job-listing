import { Chip, ThemeProvider } from "@mui/material";
import React from "react";
// import ClearIcon from "@mui/icons-material/Clear";
import { Clear } from "@mui/icons-material";
import theme from "../styles";

const DeleteFilterButton = ({ text, onDelete }) => {
  return (
    <ThemeProvider theme={theme}>
      <Chip
        sx={{
          borderRadius: "5px",
          overflow: "hidden",
        }}
        label={text}
        onDelete={() => {
          onDelete(text);
        }}
        deleteIcon={
          <Clear
            sx={{
              "&.MuiChip-deleteIcon": {
                margin: 0,
                color: "white",
                width: "30px",
                height: "100%",
                bgcolor: "primary.main",
                transition: "0.2s",
                "&:hover": {
                  color: "white",
                  backgroundColor: "neutral.vdgCyan",
                },
              },
            }}
          />
        }
      />
    </ThemeProvider>
  );
};

export default DeleteFilterButton;
