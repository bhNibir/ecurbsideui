import dayjs from "dayjs";
import React from "react";

const DiseasesDateTime = ({ formattedValue }) => {
  return <p>{dayjs(formattedValue).format("MMMM DD, YYYY")}</p>;
};

export default DiseasesDateTime;
