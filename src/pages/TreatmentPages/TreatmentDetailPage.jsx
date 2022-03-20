import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import TreatmentDetails from "../../components/TreatmentDetails/TreatmentDetails";
import { GET_TREATMENT_BY_ID } from "../../gql/gql";
import { MainLayout } from "./../../layouts/MainLayout";

const TreatmentDetailPage = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_TREATMENT_BY_ID, {
    variables: { id: id },
  });
  if (loading) return "Loading...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <MainLayout btnLabel="Add Review" btnPath="/add-review">
      <TreatmentDetails data={data} />
    </MainLayout>
  );
};

export default TreatmentDetailPage;
