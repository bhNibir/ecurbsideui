import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import flyImg from "../../assets/images/paperfly.svg";

const ThankYouMessage = ({ email, titleText, subtileText }) => (
  <>
    <Box>
      <Card elevation={5} align="center" sx={{ p: 1, borderRadius: "8px" }}>
        <CardMedia
          align="center"
          component="img"
          alt="paper fly"
          src={flyImg}
          sx={{
            height: "10%",
            width: "40%",
            my: 2,
          }}
        />
        <CardContent>
          <Typography
            sx={{ fontWeight: "medium", mb: 2 }}
            align="center"
            variant="h5"
            gutterBottom
          >
            {titleText ? titleText : "Thank You 😍!"}
          </Typography>
          {subtileText ? (
            <Typography gutterBottom variant="subtitle1">
              {subtileText}
            </Typography>
          ) : (
            <Typography gutterBottom variant="subtitle1">
              We have sent a confirmation email to <b>{email}</b>
              <br />
              Please check your email.
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            component={RouterLink}
            to="/login"
            sx={{ mx: "auto", mb: 2 }}
            variant="contained"
            color="primary"
          >
            Back
          </Button>
        </CardActions>
      </Card>
    </Box>
  </>
);

export default ThankYouMessage;