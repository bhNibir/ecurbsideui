import { Avatar, Chip, Paper, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import TreatmentList from "./../TreatmentList/TreatmentList";

const Treatment = ({ loading, error, data }) => {
  if (loading) return "Loading...";
  if (error) return `Submission error! ${error.message}`;
  console.log(data.diseaseById);
  const { diseaseName, createBy, descriptions, diseaseCategories, treatments } =
    data.diseaseById;

  return (
    <>
      <Paper sx={{ mt: 2, mb: 2, borderRadius: 5, padding: 2 }} elevation={3}>
        <Box paddingX={3} paddingY={1.5}>
          <Box>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              {diseaseName ? diseaseName : "Disease Name"}
            </Typography>
          </Box>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1.5}
            marginY={3}
          >
            <Avatar
              sx={{ width: 42, height: 42, bgcolor: red[500] }}
              aria-label="recipe"
            >
              R
            </Avatar>
            <Box paddingTop={1.25}>
              <Typography variant="subtitle2" lineHeight={0.5} component="p">
                {"@" + createBy.username}
              </Typography>
              <Typography
                variant="caption"
                lineHeight={0}
                color="text.secondary"
              >
                September 14, 2016
              </Typography>
            </Box>
          </Stack>
          <Typography>{descriptions}</Typography>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
            marginY={3}
          >
            <Typography variant="subtitle2" color="text.secondary">
              Specialty:
            </Typography>
            {diseaseCategories.map((category) => {
              return (
                <Chip
                  key={category.id}
                  label={category.name}
                  size="small"
                  variant="outlined"
                />
              );
            })}
          </Stack>
        </Box>
      </Paper>
      <Paper sx={{ borderRadius: 5, padding: 2 }} elevation={3}>
        <TreatmentList
          loading={loading}
          error={error}
          treatments={treatments}
        />
      </Paper>
    </>
  );
};

export default Treatment;
