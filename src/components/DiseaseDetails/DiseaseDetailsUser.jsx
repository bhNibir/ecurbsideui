import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import React from "react";

export const DiseaseDetailsUser = ({ createBy, createdAt }) => {
  const formateName = (userObj) => {
    const { firstName, lastName, username } = userObj;
    if (firstName) {
      return firstName + " " + lastName;
    }
    return username;
  };
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          marginY={2}
        >
          <Avatar
            sx={{ width: 35, height: 35, bgcolor: red[500] }}
            aria-label="recipe"
          >
            R
          </Avatar>
          <Box paddingTop={0.75}>
            <Typography
              variant="subtitle2"
              textTransform={"capitalize"}
              lineHeight={0.5}
              fontWeight="bold"
              color="primary"
            >
              {formateName(createBy)}
            </Typography>
            <Typography variant="caption" lineHeight={0} color="text.secondary">
              {dayjs(createdAt).format("MMMM DD, YYYY")}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default DiseaseDetailsUser;
