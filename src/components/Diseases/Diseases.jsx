import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Chip, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import DiseasesTable from "./DiseasesTable";

const Diseases = ({ loading, error, data }) => {
  if (error) return <p>Error :(</p>;

  return (
    <Box marginY={1}>
      <Paper elevation={0} sx={{ borderRadius: 5, padding: 2 }}>
        <Box marginX={3} marginY={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography
                variant="h6"
                color="primary"
                textTransform="uppercase"
              >
                All Diseases
              </Typography>
            </Box>
            <Box>
              <Chip
                color="primary"
                label="Add Disease"
                icon={<AddCircleIcon />}
                component={RouterLink}
                to="/add-disease"
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

        <Box marginY={3} style={{ width: "100%", height: "100%" }}>
          {loading ? (
            <DiseasesTable data={[]} loading={loading} />
          ) : (
            <DiseasesTable data={data} loading={loading} />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Diseases;
