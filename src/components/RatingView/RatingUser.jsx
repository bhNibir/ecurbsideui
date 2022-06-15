import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { formateName } from "../../utils/formatting";
import RatingStar from "./RatingStar";

const RatingUser = ({ review }) => {
  dayjs.extend(relativeTime);

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Avatar
              sx={{ width: 40, height: 40, bgcolor: red[500] }}
              aria-label="recipe"
            >
              R
            </Avatar>
            <Box paddingTop={0.75}>
              <Typography
                variant="subtitle1"
                textTransform={"capitalize"}
                lineHeight={{ xs: 1, sm: 0.5 }}
                fontWeight="bold"
                gutterBottom
              >
                {formateName(review?.createBy)}
              </Typography>
              <RatingStar id={1} value={review?.rating} />
            </Box>
          </Stack>
        </Box>
        <Box paddingRight={3}>
          <Stack direction="row">
            <AccessTimeFilledIcon
              sx={{
                fontSize: "1rem",
                color: "text.secondary",
                marginRight: 0.4,
                marginTop: 0.2,
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="justify"
            >
              {dayjs(review?.createdAt).fromNow()}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default RatingUser;
