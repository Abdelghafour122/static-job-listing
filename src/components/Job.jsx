import React from "react";
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
import useStyles from "../customStyles";
import FilterButton from "./FilterButton";

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
  onAdd,
}) => {
  const classes = useStyles();
  const show = () => {
    console.log([role, level, ...languages, ...tools].includes("HTML"));
  };
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ boxShadow: "0px 13px 18px -11px hsl(180, 29%, 50%)" }}>
        <Box
          onDoubleClick={() => {
            show();
          }}
          component="div"
          className={classes.jobBox}
          sx={
            featured && {
              borderLeft: "5px solid",
              borderColor: "primary.main",
            }
          }
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar
              variant="circular"
              src={logo}
              sx={{ height: "88px", width: "88px" }}
            />
            <Stack spacing={1} direction="column" alignItems="flex-start">
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography
                  fontWeight="700"
                  variant="body2"
                  sx={{ color: "primary.main" }}
                >
                  {company}
                </Typography>
                {neww && (
                  <Typography fontWeight="700">
                    <Chip
                      label="NEW!"
                      size="small"
                      sx={{ color: "white", bgcolor: "primary.main" }}
                    />
                  </Typography>
                )}
                {featured && (
                  <Typography fontWeight="700">
                    <Chip
                      size="small"
                      label="FEATURED"
                      sx={{ color: "white", bgcolor: "neutral.vdgCyan" }}
                    />
                  </Typography>
                )}
              </Stack>
              <Button
                disableElevation
                disableRipple
                variant="text"
                sx={{ padding: "0" }}
              >
                <Typography variant="body1" className={classes.positionHead}>
                  {position}
                </Typography>
              </Button>

              <Box className={classes.infoCont}>
                <Typography variant="body2"> {postedAt} </Typography>
                <Typography variant="body2"> {contract} </Typography>
                <Typography variant="body2"> {location} </Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={3} className={classes.buttonStack}>
            <FilterButton val={role} onAdd={onAdd} />
            <FilterButton val={level} onAdd={onAdd} />
            {languages.map((l) => {
              return (
                <FilterButton
                  key={Math.floor(Math.random() * 1000)}
                  val={l}
                  onAdd={onAdd}
                />
              );
            })}

            {tools.map((t) => {
              return (
                <FilterButton
                  key={Math.floor(Math.random() * 1000)}
                  val={t}
                  onAdd={onAdd}
                />
              );
            })}
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
};

export default Job;
