import { Box, Chip, Tooltip } from "@mui/material";

const MedicalSpecialty = ({ medicalSpecialty }) => {
  // const theme = useTheme();
  const medicalSpecialty3 = medicalSpecialty.slice(0, 3);
  // const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const formateLabel = (name) => {
    if (name.length >= 15) {
      return name.slice(0, 12) + "...";
    }

    return name;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          marginBottom: 1,
        }}
        component="ul"
      >
        {medicalSpecialty3?.map((category) => {
          return (
            <Box component="span" margin={0.25} key={category.id}>
              <Tooltip title={category.name} placement="top" arrow>
                <Chip
                  label={formateLabel(category.name)}
                  color="success"
                  size="small"
                  variant="outlined"
                />
              </Tooltip>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default MedicalSpecialty;
