import { useQuery } from "@apollo/client";
import { Card } from "@mui/material";
import { useState } from "react";
import { GET_REVIEWS_BY_TREATMENT_ID } from "../../../graphQL/queries";
import LoadingIndicator from "../../common/LoadingIndicator";

import ReviewItem from "./../ReviewItem/ReviewItem";

const ReviewItemList = ({ treatmentId, orderBy }) => {
  const [reviews, setReviews] = useState([]);
  const { loading, error, data } = useQuery(GET_REVIEWS_BY_TREATMENT_ID, {
    variables: { id: treatmentId, orderBy: orderBy },
    onCompleted: (data) => {
      setReviews(data.reviewsByTreatmentId.edges);
    },
  });

  console.log("ReviewItemList orderBy -------->", orderBy);
  console.log("ReviewItemList orderBy -------->", reviews);

  if (loading) return <LoadingIndicator />;
  if (error) return `Submission error! ${error.message}`;
  return (
    <>
      {reviews.length === 0 ? (
        <Card
          sx={{ mt: 2, mb: 2, borderRadius: 3, padding: 5 }}
          variant="outlined"
        >
          Rating not yet!
        </Card>
      ) : (
        reviews.map((review, index) => {
          return (
            <Card
              key={review.node.id}
              sx={{ mt: 2, mb: 2, borderRadius: 3 }}
              variant="outlined"
            >
              <ReviewItem review={review.node} key={index} />
            </Card>
          );
        })
      )}
    </>
  );
};
export default ReviewItemList;
