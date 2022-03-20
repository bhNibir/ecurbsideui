import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { TreatmentUser } from "./TreatmentUser";

const TreatmentDetails = ({ data }) => {
  const {
    treatmentName,
    createBy,
    descriptions,
    treatmentCategories,
    createdAt,
  } = data.treatmentById;
  console.log(data);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ mt: 2, mb: 2, borderRadius: 5 }} elevation={3}>
            <Box paddingX={6} paddingY={2}>
              <Box>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <TreatmentUser createBy={createBy} createdAt={createdAt} />
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
                    {treatmentName ? treatmentName : "treatment Name"}
                  </Typography>
                </Box>

                <Box paddingBottom={2}>
                  <Typography variant="body2">{descriptions}</Typography>
                </Box>
              </Box>
              {/* <TreatmentSpecialty treatmentCategories={treatmentCategories} /> */}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper>Treatment Reviews</Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default TreatmentDetails;
