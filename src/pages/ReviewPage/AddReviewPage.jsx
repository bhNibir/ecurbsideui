import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_TREATMENT_BY_ID } from "../../graphQL/queries";
import { MainLayout } from "../../layouts/MainLayout";
import AddReview from "./../../components/AddReview/AddReview";

export const AddReviewPage = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_TREATMENT_BY_ID, {
    variables: { id: id },
  });

  if (loading) return "Loading...";
  if (error) return `Submission error! ${error.message}`;
  const { id: treatmentId, disease } = data.treatmentById;
  return (
    <>
      <MainLayout>
        <AddReview diseaseId={disease.id} treatmentId={treatmentId} />
      </MainLayout>
    </>
  );
};
