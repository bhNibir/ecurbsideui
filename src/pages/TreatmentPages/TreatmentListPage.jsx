import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import TreatmentList from "../../components/TreatmentList/TreatmentList";
import { GET_TREATMENT_BY_DISEASE_ID } from "../../gql/gql";
import { MainLayout } from "../../layouts/MainLayout";

const TreatmentListPage = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_TREATMENT_BY_DISEASE_ID, {
    variables: { diseaseId: id },
  });

  console.log(data);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <MainLayout btnLabel="Add Treatment" btnPath="/add-treatment">
      <TreatmentList loading={loading} error={error} data={data} />
    </MainLayout>
  );
};

export default TreatmentListPage;
