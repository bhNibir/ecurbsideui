import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React from "react";
import RatingStar from "./RatingStar";

const RatingUser = ({ review }) => {
  dayjs.extend(relativeTime);
  const formateName = (userObj) => {
    const { firstName, lastName, username } = userObj;
    if (firstName) {
      return firstName + " " + lastName;
    }
    return username;
  };
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
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="justify"
          >
            {dayjs(review?.createdAt).fromNow()}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default RatingUser;
