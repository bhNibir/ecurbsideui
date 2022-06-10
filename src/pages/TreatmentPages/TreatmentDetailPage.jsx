import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../components/common/LoadingIndicator";
import TreatmentDetails from "../../components/TreatmentDetails/TreatmentDetails";
import { GET_TREATMENT_BY_ID } from "../../graphQL/queries";
import { MainLayout } from "./../../layouts/MainLayout";

const TreatmentDetailPage = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_TREATMENT_BY_ID, {
    variables: { id: id },
  });
  if (loading) return <LoadingIndicator />;
  if (error) return `Submission error! ${error.message}`;

  return (
    <MainLayout>
      <TreatmentDetails data={data} />
    </MainLayout>
  );
};

export default TreatmentDetailPage;
