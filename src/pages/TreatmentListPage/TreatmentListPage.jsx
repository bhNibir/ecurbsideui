import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "./../../layouts/MainLayout";

const TreatmentListPage = () => {
  let { id } = useParams();
  return (
    <MainLayout btnLabel="Add Treatment" btnPath="/add-treatment">
      <p>Treatment List Page {id}</p>
    </MainLayout>
  );
};

export default TreatmentListPage;
