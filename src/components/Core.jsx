import React, { useEffect, useState } from "react";
import { Card, Stack } from "@mui/material";
import Job from "./Job";
import data from "../data.json";

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

  useEffect(() => {
    console.log(keyWords);
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
        <Stack spacing={3} direction="row" flexWrap="wrap" p="20px">
          {keyWords.map((keyWord) => {
            return <DeleteFilterButton text={keyWord} onDelete={onDelete} />;
          })}
        </Stack>
      </Card>
      <Stack spacing={4} sx={{ marginTop: "30px" }}>
        {data.map((d) => {
          return (
            <Job
              key={d.id}
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
          );
        })}
      </Stack>
    </div>
  );
};

export default Core;
