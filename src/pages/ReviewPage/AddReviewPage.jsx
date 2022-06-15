import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Review from "../../components/AddReview/Review";
import LoadingIndicator from "../../components/common/LoadingIndicator";
import { GET_TREATMENT_BY_ID } from "../../graphQL/queries";
import { MainLayout } from "../../layouts/MainLayout";

export const AddReviewPage = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_TREATMENT_BY_ID, {
    variables: { id: id },
  });

  if (loading) return <LoadingIndicator />;
  if (error) return `Submission error! ${error.message}`;
  const { id: treatmentId, treatmentName, disease } = data.treatmentById;
  return (
    <>
      <MainLayout>
        <Review
          diseaseId={disease.id}
          treatmentId={treatmentId}
          treatmentName={treatmentName}
          gotoTreatment={true}
        />
      </MainLayout>
    </>
  );
};
