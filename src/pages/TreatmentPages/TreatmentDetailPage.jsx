import React from "react";
import { useParams } from "react-router-dom";

const TreatmentDetailPage = () => {
  console.log("TreatmentDetailPage: ");
  let { id } = useParams();
  return (
    <>
      <h1>Treatment Detail Page</h1>
      <div>Treatment id : {id}</div>
    </>
  );
};

export default TreatmentDetailPage;
