import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddReview from "./AddReview";

const Review = ({
  diseaseId,
  treatmentId,
  treatmentName,
  gotoTreatment,
  headerTitle,
}) => {
  return (
    <>
      <SubmitPaper elevation={3}>
        <AddReview
          diseaseId={diseaseId}
          treatmentId={treatmentId}
          treatmentName={treatmentName}
          gotoTreatment={true}
          headerTitle={headerTitle}
          textRow={7}
        />
      </SubmitPaper>
    </>
  );
};

export default Review;
