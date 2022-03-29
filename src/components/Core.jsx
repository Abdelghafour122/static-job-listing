import React, { useEffect, useState } from "react";
import { Card, Collapse, Fade, Stack } from "@mui/material";
import Job from "./Job";
import data from "../data.json";
import { TransitionGroup } from "react-transition-group";
import useStyles from "../customStyles";

import account from "../images/account.svg";
import eyecamCo from "../images/eyecam-co.svg";
import faceit from "../images/faceit.svg";
import insure from "../images/insure.svg";
import loopStudios from "../images/loop-studios.svg";
import manage from "../images/manage.svg";
import myhome from "../images/myhome.svg";
import photosnap from "../images/photosnap.svg";
import shortly from "../images/shortly.svg";
import airFilterComp from "../images/the-air-filter-company.svg";
import DeleteFilterButton from "./DeleteFilterButton";

const imgArr = Array.of(
  photosnap,
  manage,
  account,
  myhome,
  loopStudios,
  faceit,
  shortly,
  insure,
  eyecamCo,
  airFilterComp
);

const Core = () => {
  const [relData, setRelData] = useState(data);
  const [keyWords, setKeyWords] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    filterData(keyWords);
  }, [keyWords]);

  const addKeyWord = (val) => {
    !keyWords.includes(val) && setKeyWords([...keyWords, val]);
  };

  const onDelete = (text) => {
    console.log(keyWords);
    const updatedKeyWords = keyWords.filter((keyWord) => {
      return keyWord !== text;
    });
    setKeyWords(updatedKeyWords);
  };

  const filterData = (values) => {
    const res = data.filter((d) => {
      const keysArray = [d.role, d.level, ...d.tools, ...d.languages];
      return values.every((v) => keysArray.includes(v));
    });
    setRelData(res);
  };

  return (
    <div className="core" style={{ margintop: "40px" }}>
      <Card
        sx={
          !keyWords.length
            ? {
                visibility: "hidden",
                boxShadow: "0px 13px 18px -11px hsl(180, 29%, 50%)",
              }
            : {
                visibility: "visible",
                boxShadow: "0px 13px 18px -11px hsl(180, 29%, 50%)",
              }
        }
      >
        <Stack
          sx={{ gap: { xs: "20px" } }}
          direction="row"
          flexWrap="wrap"
          p="20px"
        >
          <TransitionGroup className={classes.buttonStack}>
            {keyWords.map((keyWord) => {
              return (
                <Collapse orientation="horizontal">
                  <DeleteFilterButton text={keyWord} onDelete={onDelete} />
                </Collapse>
              );
            })}
          </TransitionGroup>
        </Stack>
      </Card>
      <Stack sx={{ marginTop: "30px" }}>
        <TransitionGroup>
          {relData.map((d) => {
            return (
              <Collapse key={d.id}>
                <Job
                  company={d.company}
                  logo={imgArr[d.id - 1]}
                  neww={d.new}
                  featured={d.featured}
                  position={d.position}
                  role={d.role}
                  level={d.level}
                  postedAt={d.postedAt}
                  contract={d.contract}
                  location={d.location}
                  languages={d.languages}
                  tools={d.tools}
                  onAdd={addKeyWord}
                />
              </Collapse>
            );
          })}
        </TransitionGroup>
      </Stack>
    </div>
  );
};

export default Core;
