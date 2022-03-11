import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import AddDisease from "./AddDisease";

const AddDiseasePage = () => (
  <MainLayout btnLabel="Add Disease" btnPath="/add-disease">
    <AddDisease />
  </MainLayout>
);

export default AddDiseasePage;
