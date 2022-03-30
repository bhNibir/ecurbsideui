import { Box, Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "./DefaultLayout";
import SideMessage from "./SideMessage";

const LoginPageLayout = ({ children }) => (
  <>
    <DefaultLayout>
      <Grid item xs={12} sm={10} md={7} xl={7}>
        <Box>
          <SideMessage />
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={4} xl={5}>
        {children}
      </Grid>
    </DefaultLayout>
  </>
);

export default LoginPageLayout;
