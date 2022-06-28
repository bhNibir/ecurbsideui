import { Card } from "@mui/material";
import LoadingIndicator from "../../common/LoadingIndicator";

import ReviewItem from "./../ReviewItem/ReviewItem";

const ReviewItemList = ({ reviews, setReviews, loading, error }) => {
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
          Rating not found!
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
