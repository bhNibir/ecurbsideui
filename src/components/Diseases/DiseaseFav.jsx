import { useMutation } from "@apollo/client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { GET_DISEASES } from "../../graphQL/queries";
import { UPDATE_OR_CREATE_FAVORITE_DISEASE } from "./../../graphQL/mutations";
import LoadingIndicator from "./../common/LoadingIndicator";

const DiseaseFav = ({ row }) => {
  const [fav, setFav] = useState(!!row?.favoriteDisease?.isFavorite);
  const { enqueueSnackbar } = useSnackbar();

  const [favorite, { data, loading: mutationLoading }] = useMutation(
    UPDATE_OR_CREATE_FAVORITE_DISEASE,
    {
      refetchQueries: [{ query: GET_DISEASES }],
      onCompleted: (data) => {
        console.log(data);
        const { isFavorite, disease } =
          data?.updateOrCreateFavoriteDisease.favoriteDisease;
        setFav(isFavorite);

        if (isFavorite) {
          enqueueSnackbar(` ${disease.diseaseName}, added to favorite!`, {
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            variant: "info",
          });
        } else {
          enqueueSnackbar(` ${disease.diseaseName}, remove from favorite!`, {
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            variant: "warning",
          });
        }
      },
      onError: (error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      },
    }
  );

  const handleFav = (event) => {
    event.stopPropagation();
    const isFavorite = !fav;
    const diseaseId = row.id;

    favorite({
      variables: {
        diseaseId,
        isFavorite,
      },
    });
    console.log(row.id);
  };

  if (mutationLoading) return <LoadingIndicator />;

  return (
    <Box>
      <IconButton onClick={handleFav} aria-label="favorite">
        {fav ? (
          <FavoriteIcon color="secondary" />
        ) : (
          <FavoriteBorderIcon sx={{}} fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
};

export default DiseaseFav;
