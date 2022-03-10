import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Chip, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import DiseaseAvatar from "./DiseaseAvatar";
import DiseaseFav from "./DiseaseFav";
import DiseasesCat from "./DiseasesCat";
import DiseasesDateTime from "./DiseasesDateTime";
import DiseasesLoadingOverlay from "./DiseasesLoadingOverlay";
import DiseasesTable from "./DiseasesTable";

const dataColumns = [
  {
    field: "avatar",
    headerName: "",
    renderCell: DiseaseAvatar,
    width: 80,
    sortable: false,
    filterable: false,
  },
  {
    field: "id",
    headerName: "ID",
    width: 50,
    sortable: false,
    filterable: false,
  },
  {
    field: "diseaseName",
    headerName: "Disease Name",
    type: "string",
    width: 200,
    flex: 0.5,
  },
  {
    field: "updatedAt",
    headerName: "Last Update",
    renderCell: DiseasesDateTime,
    width: 200,
    type: "date",
  },
  {
    field: "categories",
    headerName: "Category",
    renderCell: DiseasesCat,
    width: 200,
    flex: 1,
    sortable: false,
  },
  {
    field: "favorite",
    headerName: "Favorite",
    renderCell: DiseaseFav,
    width: 80,
    sortable: false,
  },
];

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
            <DataGrid
              density="comfortable"
              autoHeight
              pagination
              loading={loading}
              components={{
                LoadingOverlay: DiseasesLoadingOverlay,
              }}
              columns={dataColumns}
              rows={[]}
            />
          ) : (
            <DiseasesTable data={data} dataColumns={dataColumns} />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Diseases;
