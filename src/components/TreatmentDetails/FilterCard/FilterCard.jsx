import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import FilterCountry from "./FilterCountry";
import FilterProvider from "./FilterProvider";
import FilterSpecialty from "./FilterSpecialty";

// const Accordion = styled(MuiAccordion)(({ theme }) => ({
//   borderRadius: "8px",
//   root: {
//     "&:before": {
//       backgroundColor: "transparent",
//     },
//   },
// }));

const FilterCard = () => {
  return (
    <>
      <Accordion sx={{ borderRadius: "8px" }}>
        <AccordionSummary
          expandIcon={<FilterListIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ flexDirection: "row-reverse" }}
        >
          <Typography ml={2}>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FilterCountry />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilterSpecialty />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilterProvider />
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FilterCard;
