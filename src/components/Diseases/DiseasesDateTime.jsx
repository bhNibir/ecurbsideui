import React from "react";

const DiseasesDateTime = ({ formattedValue }) => {
  //   const { formattedValue } = props;
  const date = new Date(formattedValue);
  //   console.log(formattedValue);

  return <p>{date.toLocaleString()}</p>;
};

export default DiseasesDateTime;
