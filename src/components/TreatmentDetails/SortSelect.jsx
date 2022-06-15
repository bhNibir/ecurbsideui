import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect } from "react";

const SortSelect = ({ sortedReviews, setSortedReviews }) => {
  const [sortingBy, setSortingBy] = React.useState("newest");

  const handleChange = (event) => {
    setSortingBy(event.target.value);
  };

  useEffect(() => {
    const arrayForSort = [...sortedReviews];

    if (sortingBy === "newest") {
      setSortedReviews(
        arrayForSort?.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      );
    }

    if (sortingBy === "oldest") {
      setSortedReviews(
        arrayForSort?.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        })
      );
    }
    if (sortingBy === "highest") {
      setSortedReviews(
        arrayForSort?.sort((a, b) => {
          return b.rating - a.rating;
        })
      );
    }
    if (sortingBy === "lowest") {
      setSortedReviews(
        arrayForSort?.sort((a, b) => {
          return a.rating - b.rating;
        })
      );
    }
  }, [sortingBy]);

  console.log("sorted Select ");

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={sortingBy}
        label="Age"
        onChange={handleChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem value={"newest"}>Newest First</MenuItem>
        <MenuItem value={"oldest"}>Oldest First</MenuItem>
        <MenuItem value={"highest"}>Highest Rated</MenuItem>
        <MenuItem value={"lowest"}>Lowest Rated</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
