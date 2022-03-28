import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";
import React from "react";

const TreatmentUser = ({ createBy, createdAt }) => {
  const formateName = (userObj) => {
    const { firstName, lastName, username } = userObj;
    if (firstName) {
      return firstName + " " + lastName;
    }
    return username;
  };
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
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
