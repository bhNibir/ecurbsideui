import { Stack } from "@mui/material";
import { SpinnerRoundFilled } from "spinners-react";

const LoadingIndicator = ({ isLoading }) => {
  return (
    <Stack
      minHeight={"100vh"}
      direction="row"
      justifyContent="center"
      alignItems="center"
      backgroundColor="inherit"
    >
      <SpinnerRoundFilled
        size={75}
        thickness={100}
        speed={90}
        color="rgba(9, 132, 227, 1)"
      />
    </Stack>
  );
};

export default LoadingIndicator;
