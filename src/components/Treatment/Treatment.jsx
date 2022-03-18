import { Avatar, Chip, Paper, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import TreatmentList from "../TreatmentList/TreatmentList";

const Treatment = ({ loading, error, data }) => {
  const [chipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);
  console.log(data);
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <>
      <Paper sx={{ mt: 2, mb: 2, borderRadius: 5, padding: 2 }} elevation={3}>
        <Box paddingX={3} paddingY={1.5}>
          <Box>
            <Typography variant="h3" color="text.secondary" gutterBottom>
              Strep Pharyngitis
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
                Nibir
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
          <Typography>
            Also known as strep throat, is an infection of the throat including
            the tonsils caused by group A streptococcus.
          </Typography>

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
            {chipData.map((data) => {
              return (
                <Chip label={data.label} size="small" variant="outlined" />
              );
            })}
          </Stack>
        </Box>
      </Paper>
      <Paper sx={{ borderRadius: 5, padding: 2 }} elevation={3}>
        <TreatmentList loading={loading} error={error} data={data} />
      </Paper>
    </>
  );
};

export default Treatment;
