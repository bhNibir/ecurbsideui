import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexGrow: 1, backgroundColor: "#f0f2f5" }}>
        <Container fixed>
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              mt: 4,
              mb: {
                xs: 4,
                sm: 5,
                md: 8,
                lg: 12,
                xl: 12,
              },
            }}
          >
            {children}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
