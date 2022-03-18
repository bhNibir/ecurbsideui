import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Treatment from "../../components/Treatment/Treatment";
import { GET_DISEASE_BY_ID } from "../../gql/gql";
import { MainLayout } from "../../layouts/MainLayout";

const TreatmentListPage = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_DISEASE_BY_ID, {
    variables: { id: id },
  });

  return (
    <MainLayout btnLabel="Add Treatment" btnPath="/add-treatment">
      <Treatment loading={loading} error={error} data={data} />
    </MainLayout>
  );
};

export default TreatmentListPage;
