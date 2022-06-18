import AddLocationTwoToneIcon from "@mui/icons-material/AddLocationTwoTone";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { formateName } from "../../../utils/formatting";

const AddReviewUserCard = ({ treatmentId }) => {
  const { loggedInUser } = useAuth();
  const {
    firstName,
    lastName,
    username,
    country,
    medicalProviderType,
    medicalSetting,
    medicalSpecialty,
  } = loggedInUser;
  console.log("loggedInUser", loggedInUser);

  const navigate = useNavigate();

  // const handleAddReview = (value) => {
  //   navigate(`/add-review/${treatmentId}`);
  // };

  return (
    <>
      <Box padding={1}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "center" }}
          justifyContent="space-evenly"
          spacing={1}
        >
          <Box margin={1}>
            <Avatar
              sx={{ width: "75px", height: "75px", bgcolor: red[500] }}
              aria-label="avatar"
            />
          </Box>

          <Box>
            <Typography
              textTransform={"capitalize"}
              fontWeight="bold"
              // color="primary"
              variant="h6"
              // sx={{ fontWeight: "bold" }}
            >
              {firstName && lastName ? formateName(loggedInUser) : "User Name"}
            </Typography>
            <Stack
              justifyContent={{ xs: "center", sm: "flex-start" }}
              direction="row"
              // justifyContent="flex-start"
              alignItems="center"
            >
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  marginLeft: 0.3,
                }}
              >
                @{username}
              </Typography>
              {country && (
                <>
                  <LocationOnIcon
                    color="action"
                    sx={{ fontSize: 16, marginLeft: 1 }}
                  />
                  <Typography
                    sx={{
                      color: "text.secondary",
                      marginTop: 0.3,
                      marginLeft: 0.3,
                    }}
                    variant="caption"
                  >
                    {country?.iocCode}
                  </Typography>
                </>
              )}
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {medicalProviderType && (
                <>
                  <AdminPanelSettingsTwoToneIcon
                    color="action"
                    sx={{ fontSize: 16 }}
                  />
                  <Typography
                    sx={{
                      color: "text.secondary",
                      marginTop: 0.3,
                      marginLeft: 0.3,
                    }}
                    variant="caption"
                  >
                    {medicalProviderType?.name}
                  </Typography>
                </>
              )}
              {medicalSetting && (
                <>
                  <AddLocationTwoToneIcon
                    color="action"
                    sx={{ fontSize: 16, marginLeft: 1 }}
                  />
                  <Typography
                    sx={{
                      color: "text.secondary",
                      marginTop: 0.3,
                      marginLeft: 0.3,
                    }}
                    variant="caption"
                  >
                    {medicalSetting?.name}
                  </Typography>
                </>
              )}
            </Stack>
          </Box>
          <Box>
            <Chip
              color="secondary"
              label={"Add Review"}
              icon={<RateReviewIcon />}
              component={RouterLink}
              to={`/add-review/${treatmentId}`}
              sx={{
                paddingX: 0.5,
                paddingY: 1,
                textTransform: "capitalize",
                transition: "transform 0.2s",
                fontWeight: "bold",
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                },
              }}
            />
            <Typography
              color="primary"
              sx={{
                // color: "text.primary",
                marginTop: 1,
              }}
              variant="body1"
            >
              Start your review.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default AddReviewUserCard;
