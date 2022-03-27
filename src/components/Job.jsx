import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Stack,
  Typography,
  ThemeProvider,
} from "@mui/material";
import theme from "../styles";

const Job = ({
  company,
  logo,
  neww,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "10px",
          }}
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar variant="circular" src={logo} />
            <Stack spacing={1} direction="column" alignItems="flex-start">
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography fontWeight="700"> {company} </Typography>
                {neww && (
                  <Typography fontWeight="700">
                    <Chip label="NEW!" />
                  </Typography>
                )}
                {featured && (
                  <Typography fontWeight="700">
                    <Chip label="FEATURED" />
                  </Typography>
                )}
              </Stack>
              <Typography variant="body1"> {position} </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body2"> {postedAt} </Typography>
                <Typography variant="body2">{contract}</Typography>
                <Typography variant="body2"> {location} </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Button disableElevation>{role}</Button>
            <Button disableElevation> {level} </Button>
            {languages.map((l) => {
              return <Button disableElevation> {l} </Button>;
            })}

            {tools.map((t) => {
              return <Button disableElevation> {t} </Button>;
            })}
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default Job;
