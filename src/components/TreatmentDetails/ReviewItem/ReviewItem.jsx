import { Box, Typography } from "@mui/material";
import ReviewUser from "./ReviewUser";

const ReviewItem = ({ review }) => {
  console.log(review);
  return (
    <Box padding={2}>
      <Box my={1} marginLeft={1}>
        <ReviewUser review={review} />
      </Box>

      <Box>
        <Box py={1.5} px={3}>
          <Typography variant="body2">{review?.content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewItem;
