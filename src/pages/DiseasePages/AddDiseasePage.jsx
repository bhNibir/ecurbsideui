import React from "react";
import AddDisease from "../../components/AddDisease/AddDisease";
import { MainLayout } from "../../layouts/MainLayout";

const AddDiseasePage = () => (
  <MainLayout btnLabel="Add Disease" btnPath="/add-disease">
    <AddDisease />
  </MainLayout>
);

export default AddDiseasePage;
