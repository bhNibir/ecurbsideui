import { Delete, PhotoCamera } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, styled } from "@mui/material";
import React, { createRef, useState } from "react";
import { Controller } from "react-hook-form";

const Input = styled("input")({
  display: "none",
});

const AvatarUpload = ({ control }) => {
  const [image, _setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event, field) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }

    field.onChange(event.target.files);
  };

  /**
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return (
    <Box fullWidth sx={{ mb: 1 }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <label htmlFor="icon-button-file">
            <Controller
              name="profilePicture"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  name="profilePicture"
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  ref={inputFileRef}
                  hidden
                  onChange={(event) => handleOnChange(event, field)}
                />
              )}
            />

            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={handleClick}
            >
              {image ? <Delete color="error" mr={2} /> : <PhotoCamera mr={2} />}
            </IconButton>
          </label>
        }
      >
        <Avatar
          alt="Profile Picture"
          src={image || "../../assets/images/users/user-round.svg"}
          sx={{ bgcolor: "#eaeaf0", width: 80, height: 80 }}
        />
      </Badge>
    </Box>
  );
};

export default AvatarUpload;
