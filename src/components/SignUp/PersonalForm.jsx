import { useQuery } from "@apollo/client";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import CountrySelect from "../common/CountrySelect";
import SingleSelect from "../common/SingleSelect";
import {
  GET_DISEASE_CATEGORIES,
  GET_MEDICAL_PROVIDER,
  GET_MEDICAL_SETTING,
} from "./../../gql/gql";
import MultiSelect from "./../common/MultiSelect";

const PersonalForm = ({ control, setValue, validationError }) => {
  const [showPassBtn, setShowPassBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [MedicalProviderData, setMedicalProviderData] = useState([]);
  const [MedicalSettingData, setMedicalSettingData] = useState([]);
  const [medicalSpecialtyData, setMedicalSpecialtyData] = useState([]);

  const { loading: medicalProviderLoading, error: medicalProviderError } =
    useQuery(GET_MEDICAL_PROVIDER, {
      onCompleted: (data) => {
        console.log("data", data.medicalProvider);
        setMedicalProviderData(data.medicalProvider);
      },
    });

  const { loading: MedicalSettingLoading, error: MedicalSettingError } =
    useQuery(GET_MEDICAL_SETTING, {
      onCompleted: (data) => {
        console.log("data", data.medicalSetting);
        setMedicalSettingData(data.medicalSetting);
      },
    });

  const { loading: medicalSpecialtyLoading, error: medicalSpecialtyError } =
    useQuery(GET_DISEASE_CATEGORIES, {
      onCompleted: (data) => {
        setMedicalSpecialtyData(data.diseasesCategories);
      },
    });

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="none"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={value}
                onChange={onChange}
                type="text"
                error={!!error || !!validationError?.firstName}
                helperText={[
                  error && (
                    <span key={error.message.length}>
                      {error.message}
                      <br />
                    </span>
                  ),
                  validationError?.firstName?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="none"
                name="lastName"
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                value={value}
                onChange={onChange}
                type="text"
                error={!!error || !!validationError?.lastName}
                helperText={[
                  error && (
                    <span key={error.message.length}>
                      {error.message}
                      <br />
                    </span>
                  ),
                  validationError?.lastName?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={value}
                onChange={onChange}
                type="text"
                error={!!error || !!validationError?.username}
                helperText={[
                  error && (
                    <span key={error.message.length}>
                      {error.message}
                      <br />
                    </span>
                  ),

                  validationError?.username?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                id="email"
                label="Email address"
                name="email"
                value={value}
                onChange={onChange}
                error={!!error || !!validationError?.email}
                helperText={[
                  error && (
                    <span key={error.message.length}>
                      {error.message}
                      <br />
                    </span>
                  ),
                  validationError?.email?.map(({ message }, index) => (
                    <span key={index}>
                      {message}
                      <br />
                    </span>
                  )),
                ]}
                type="email"
              />
            )}
            rules={{ required: "Email required" }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                size="small"
                margin="dense"
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                id="password"
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
                  !error &&
                    !validationError?.password2 &&
                    "Password must have minimum 8 characters, uppercase, lowercase, numbers and symbol.",
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

          <CountrySelect
            control={control}
            name={"country"}
            // loading={CategoryLoading}
            // error={CategoryError}
            // data={CategoryData}
            size="small"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Are you a health care provider ?"
            labelPlacement="start"
          />
          <SingleSelect
            control={control}
            name={"medicalProviderId"}
            loading={medicalProviderLoading}
            error={medicalProviderError}
            data={MedicalProviderData}
            size="small"
            label="Medical Provider Type"
          />
          <SingleSelect
            control={control}
            name={"medicalSettingId"}
            loading={MedicalSettingLoading}
            error={MedicalSettingError}
            data={MedicalSettingData}
            size="small"
            label="Medical Setting"
          />
          <MultiSelect
            control={control}
            setValue={setValue}
            name={"medicalSpecialty"}
            loading={medicalSpecialtyLoading}
            error={medicalSpecialtyError}
            data={medicalSpecialtyData}
            size="small"
            label="Medical Specialty"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PersonalForm;
