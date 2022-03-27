import React from "react";
import { Stack } from "@mui/material";
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
  return (
    <div className="core">
      <Stack spacing={4}>
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
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default Core;
