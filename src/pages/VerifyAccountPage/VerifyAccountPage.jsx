import { useMutation } from "@apollo/client";
import { Box, Card, Container, CssBaseline, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VerifyErrorMessage from "../../components/AlertMessages/VerifyErrorMessage";
import VerifySuccessMessage from "../../components/AlertMessages/VerifySuccessMessage";
import Footer from "../../components/Footer/Footer";
import { VERIFY_ACCOUNT } from "../../graphQL/mutations";

const VerifyAccountPage = () => {
  const { token } = useParams();
  const [verifyAccount, { data }] = useMutation(VERIFY_ACCOUNT);

  useEffect(() => {
    verifyAccount({ variables: { token } });
  }, [token, verifyAccount]);

  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "80vh" }}
      >
        <Container maxWidth="sm">
          <Box>
            <Card
              align="center"
              sx={{
                m: 2,
                p: 1,
              }}
            >
              {data?.verifyAccount?.success && (
                <>
                  <VerifySuccessMessage />
                </>
              )}
              {data?.verifyAccount?.errors?.nonFieldErrors?.map(
                ({ message }) => (
                  <>
                    <VerifyErrorMessage message={message} />
                  </>
                )
              )}
            </Card>
          </Box>
        </Container>
      </Grid>
      <Footer />
    </>
  );
};

export default VerifyAccountPage;
