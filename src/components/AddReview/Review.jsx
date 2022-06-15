import SubmitPaper from "../StyledComponents/SubmitPaper";
import AddReview from "./AddReview";

const Review = ({ diseaseId, treatmentId, treatmentName, gotoTreatment }) => {
  return (
    <>
      <SubmitPaper elevation={3}>
        <AddReview
          diseaseId={diseaseId}
          treatmentId={treatmentId}
          treatmentName={treatmentName}
          gotoTreatment={true}
        />
      </SubmitPaper>
    </>
  );
};

export default Review;
