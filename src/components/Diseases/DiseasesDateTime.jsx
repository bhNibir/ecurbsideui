import dayjs from "dayjs";
import React from "react";

const DiseasesDateTime = ({ formattedValue }) => {
  //   const { formattedValue } = props;
  // const date = dayjs.utc(formattedValue);
  console.log(formattedValue);

  return <p>{dayjs(formattedValue).format("MMMM DD, YYYY")}</p>;
};

export default DiseasesDateTime;
