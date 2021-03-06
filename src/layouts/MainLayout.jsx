import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";

// This main Layout Component All Component rapped by this componet

// eslint-disable-next-line import/prefer-default-export
export const MainLayout = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#f4fdfb",
        flex: 1,
      }}
    >
      <NavBar btnLabel="Add Disease" btnPath="/add-disease" />
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
  </Box>
);
