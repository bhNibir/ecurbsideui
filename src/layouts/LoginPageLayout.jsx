import { Box, Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "./DefaultLayout";
import SideMessage from "./SideMessage";

const LoginPageLayout = ({ children }) => (
  <>
    <DefaultLayout>
      <Grid item xs={12} md={7}>
        <Box>
          <SideMessage />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        {children}
      </Grid>
    </DefaultLayout>
  </>
);

export default LoginPageLayout;
