import { useQuery } from "@apollo/client";
import React from "react";
import Diseases from "../../components/Diseases/Diseases";
import HomeHero from "../../components/HomeHero/HomeHero";
import { MainLayout } from "../../layouts/MainLayout";
import { GET_DISEASES } from "./../../gql/gql";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_DISEASES);

  return (
    <>
      <MainLayout>
        <HomeHero />
        <Diseases loading={loading} error={error} data={data} />
      </MainLayout>
    </>
  );
};

export default HomePage;
