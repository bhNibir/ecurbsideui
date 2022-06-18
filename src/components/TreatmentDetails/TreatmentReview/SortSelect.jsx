import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const sortList = [
  {
    label: "Newest First",
    value: "-createdAt",
  },
  {
    label: "Oldest First",
    value: "createdAt",
  },
  {
    label: "Highest Rated",
    value: "-rating",
  },
  {
    label: "Lowest Rated",
    value: "rating",
  },
];

const SortSelect = ({ orderBy, handleOrdering }) => {
  console.log("orderBy", orderBy);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Sort</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={orderBy}
        label="Sort"
        onChange={handleOrdering}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {sortList.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SortSelect;
