import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

const InputPassword = ({
  control,
  name,
  label,
  helperText,
  validationError,
}) => {
  const [showPassBtn, setShowPassBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {" "}
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            size="small"
            margin="dense"
            variant="outlined"
            fullWidth
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            type={showPassword ? "text" : "password"}
            onFocus={() => setShowPassBtn(true)}
            InputProps={{
              endAdornment: showPassBtn && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
                    ) : (
                      <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!error || !!validationError?.password2}
            helperText={[
              !error && !validationError?.password2 && helperText,
              error && (
                <span key={error.message.length}>
                  {error.message}
                  <br />
                </span>
              ),

              validationError?.password2?.map(({ message }, index) => (
                <span key={index}>
                  {message}
                  <br />
                </span>
              )),
            ]}
          />
        )}
      />
    </>
  );
};

export default InputPassword;
