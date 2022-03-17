import React from "react";
import TreatmentList from "../TreatmentList/TreatmentList";

const Treatment = ({ loading, error, data }) => {
  return (
    <>
      <div>treatment</div>
      <TreatmentList loading={loading} error={error} data={data} />
    </>
  );
};

export default Treatment;
