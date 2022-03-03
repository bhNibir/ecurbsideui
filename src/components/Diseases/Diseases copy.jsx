import { useQuery } from "@apollo/client";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Card, Chip, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { GET_DISEASES } from "../../gql/gql";
import DiseasesItem from "./DiseasesItem";

const Diseases = () => {
  const { loading, error, data } = useQuery(GET_DISEASES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("All Diseases:", data);

  return (
    <>
      <Card>
        <Box>Diseases</Box>
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

        {/* {data.diseases.map((disease, { id }) => (
                    <React.Fragment key={id}> */}
        <Divider
          variant="middle"
          //   sx={{
          //     backgroundcolor: "#d9e2ee",
          //     m: "0 20px",
          //   }}
        />
        {/* <DiseasesItem disease={disease} /> */}
        {/* </React.Fragment>
                ))} */}
        <DiseasesItem data={data} />

        {/* <Link className={{
        color: '#2281bb',
        p: '0 0.25rem',
        fontsize: '0.875rem',
    }}>Refresh</Link> •{' '}
                        <LinK className={{
        color: '#2281bb',
        p: '0 0.25rem',
        fontsize: '0.875rem',
    }}>See More</LinK> */}
      </Card>
      <div style={{ width: "100%", height: "100%" }}>
        <DiseasesItem data={data} />
      </div>
    </>
  );
};

export default Diseases;
