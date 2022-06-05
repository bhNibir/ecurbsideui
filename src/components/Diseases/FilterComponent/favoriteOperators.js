// import { Box, MenuItem, Select } from "@mui/material";
// import React from "react";

// const InputValue = (props) => {
//   const { item, applyValue, focusElementRef } = props;

//   const ratingRef = React.useRef(null);
//   React.useImperativeHandle(focusElementRef, () => ({
//     focus: () => {
//       ratingRef.current
//         .querySelector(`input[value="${Number(item.value) || ""}"]`)
//         .focus();
//     },
//   }));

//   const handleFilterChange = (event, newValue) => {
//     applyValue({ ...item, value: newValue });
//   };
//   return (
//     <Box
//       sx={{
//         display: "inline-flex",
//         flexDirection: "row",
//         alignItems: "center",
//         height: 48,
//         pl: "20px",
//       }}
//     >
//       <Select
//         label="visibility"
//         ref={ratingRef}
//         value={Number(item.value)}
//         onChange={handleFilterChange}
//       >
//         <MenuItem value={true}>Public</MenuItem>
//         <MenuItem value={false}>Private</MenuItem>
//       </Select>
//     </Box>
//   );
// };

// const favoriteOperators = [
//   {
//     label: "Is favorite ?",
//     value: "isFavorite",
//     getApplyFilterFn: (filterItem) => {
//       if (
//         !filterItem.columnField ||
//         !filterItem.value ||
//         !filterItem.operatorValue
//       ) {
//         return null;
//       }

//       return (params) => {
//         return Boolean(params.value) === Boolean(filterItem.value);
//       };
//     },
//     InputComponent: InputValue,
//     InputComponentProps: { type: "boolean" },
//   },
// ];

// export default favoriteOperators;
