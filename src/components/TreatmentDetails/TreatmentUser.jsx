import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import React from "react";
import { formateName, stringAvatar } from "../../utils/formatting";

const TreatmentUser = ({ createBy, createdAt }) => {
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          marginTop={2}
          marginBottom={{ md: 2, sm: 1 }}
        >
          <Box marginTop={0.25}>
            <Avatar
              sx={{ width: 35, height: 35, bgcolor: red[500] }}
              aria-label="recipe"
              {...stringAvatar(formateName(createBy))}
            />
          </Box>
          <Box lineHeight={1}>
            <Typography
              variant="subtitle2"
              textTransform={"capitalize"}
              fontWeight="bold"
              color="primary"
            >
              {formateName(createBy)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {dayjs(createdAt).format("MMMM DD, YYYY")}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TreatmentUser;
