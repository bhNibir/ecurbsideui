import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Avatar, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import TreatmentList from "./../TreatmentList/TreatmentList";

const Treatment = ({ loading, error, data }) => {
  if (loading) return "Loading...";
  if (error) return `Submission error! ${error.message}`;
  console.log(data.diseaseById);
  const {
    diseaseName,
    createBy,
    descriptions,
    diseaseCategories,
    treatments,
    createdAt,
  } = data.diseaseById;

  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${
      month[date.getMonth()]
    } ${date.getDate()} , ${date.getFullYear()}`;
  };
  const formateName = (userObj) => {
    const { firstName, lastName, username } = userObj;
    if (firstName) {
      return firstName + " " + lastName;
    }
    return username;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ mt: 2, mb: 2, borderRadius: 5 }} elevation={3}>
          <Box paddingX={6} paddingY={2}>
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
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
                      <Typography
                        variant="caption"
                        lineHeight={0}
                        color="text.secondary"
                      >
                        {formateDate(createdAt)}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Chip
                    color="primary"
                    label="Add Treatment"
                    icon={<AddCircleIcon />}
                    component={RouterLink}
                    to="/add-treatment"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition:
                        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      boxShadow:
                        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
                      "&:hover": {
                        backgroundColor: "rgb(6, 92, 158)",
                      },
                    }}
                  />
                </Box>
              </Stack>
            </Box>

            <Box marginTop={1}>
              <Box>
                <Typography variant="h6" color="secondary" gutterBottom>
                  {diseaseName ? diseaseName : "Disease Name"}
                </Typography>
              </Box>

              <Box paddingBottom={2}>
                <Typography variant="body2">{descriptions}</Typography>
              </Box>
            </Box>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
              marginY={3}
            >
              <Typography variant="subtitle2">Specialty:</Typography>
              {diseaseCategories.map((category) => {
                return (
                  <Chip
                    key={category.id}
                    label={category.name}
                    color="success"
                    size="small"
                    variant="outlined"
                  />
                );
              })}
            </Stack>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ borderRadius: 5, padding: 2 }} elevation={3}>
          <TreatmentList
            loading={loading}
            error={error}
            treatments={treatments}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Treatment;
