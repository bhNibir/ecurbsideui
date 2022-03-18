import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
// import Page from "../components/Page";
import Img404 from "../../assets/images/illustration_404.svg";
// components
import { MotionContainer, varBounceIn } from "../../components/animate";
import DefaultLayout from "./../../layouts/DefaultLayout";
// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <DefaultLayout>
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Sorry, page not found!
              </Typography>
            </motion.div>
            <Typography sx={{ color: "text.secondary" }}>
              Sorry, we couldn’t find the page you’re looking for.
            </Typography>

            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src={Img404}
                sx={{
                  height: {
                    sm: 260,
                    xs: "100%",
                  },
                  width: "100%",
                  mx: "auto",
                  my: { xs: 2, sm: 2, md: 5 },
                }}
              />
            </motion.div>

            <Button
              to="/"
              variant="contained"
              disableElevation
              disableRipple
              component={RouterLink}
            >
              Go to Home
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </DefaultLayout>
  );
}
