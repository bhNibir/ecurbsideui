import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import DiseaseDetails from "../../components/DiseaseDetails/DiseaseDetails";
import { GET_DISEASE_BY_ID } from "../../graphQL/queries";
import { MainLayout } from "../../layouts/MainLayout";

const DiseaseTreatmentListPage = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_DISEASE_BY_ID, {
    variables: { id: id },
  });

  return (
    <MainLayout>
      <DiseaseDetails loading={loading} error={error} data={data} />
    </MainLayout>
  );
};

export default DiseaseTreatmentListPage;
