import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";

// This main Layout Component All Component rapped by this componet

// eslint-disable-next-line import/prefer-default-export
export const MainLayout = ({ children }) => (
  <>
    <Box
      sx={{
        backgroundColor: "#F4FDFB",
      }}
    >
      <NavBar />
      <Container
        maxWidth="lg"
        sx={{
          pt: (theme) => theme.spacing(1),
          pb: (theme) => theme.spacing(4),
        }}
      >
        {children}
      </Container>
    </Box>
    <Footer />
  </>
);
