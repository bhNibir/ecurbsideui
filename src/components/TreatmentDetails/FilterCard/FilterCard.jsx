import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
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

const FilterCard = ({
  treatmentId,
  getReview,
  reviews,
  setReviews,
  filterBy,
  setFilterBy,
  orderBy,
}) => {
  const [filterDisable, setFilterDisable] = useState(true);

  const handleFilter = ({ name, value }) => {
    setFilterBy({ ...filterBy, [name]: value });
    setFilterDisable(false);
  };

  const handleSubmit = () => {
    const values = { ...filterBy, id: treatmentId, orderBy: orderBy };
    console.log("values", values);
    getReview({
      variables: values,
      fetchPolicy: "no-cache",
      onCompleted: (data) => {
        setReviews(data.reviewsByTreatmentId.edges);
        setFilterDisable(true);
      },
    });
  };

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
          <Box sx={{ flexGrow: 1, mb: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <FilterCountry handleFilter={handleFilter} />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilterSpecialty handleFilter={handleFilter} />
              </Grid>
              <Grid item xs={12} md={4}>
                <FilterProvider handleFilter={handleFilter} />
              </Grid>
            </Grid>
          </Box>
          <AccordionActions>
            <Button
              variant="outlined"
              size="small"
              onClick={handleSubmit}
              disabled={filterDisable}
            >
              filter
            </Button>
          </AccordionActions>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FilterCard;
