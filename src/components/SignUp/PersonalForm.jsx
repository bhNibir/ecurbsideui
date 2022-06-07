import { useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  GET_COUNTRIES_LIST,
  GET_DISEASE_CATEGORIES,
  GET_MEDICAL_PROVIDER,
  GET_MEDICAL_SETTING,
} from "../../graphQL/queries";
import CountrySelect from "../common/CountrySelect";
import RadioButtons from "../common/RadioButtons";
import SingleSelect from "../common/SingleSelect";
import MultiSelect from "./../common/MultiSelect";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    country: yup.string().required("Country is required"),
    healthProvider: yup.boolean().required("Health provider is required"),
    medicalProviderTypeId: yup.string().when("healthProvider", {
      is: true,
      then: yup.string().required("Medical provider type is required"),
    }),

    medicalSpecialty: yup.array().when("healthProvider", {
      is: true,
      then: yup
        .array()
        .min(1, "At least 1 Medical specialty is required")
        .required("Medical specialty is required"),
    }),

    medicalSettingId: yup.string().when("healthProvider", {
      is: true,
      then: yup.string().required("Medical setting is required"),
    }),
  })
  .required();

const defaultValues = {
  firstName: "",
  lastName: "",
  country: "",
  healthProvider: true,
  medicalProviderTypeId: "",
  medicalSpecialty: [],
  medicalSettingId: "",
};

const PersonalForm = ({
  validationError,
  handleNext,
  userData,
  setUserData,
}) => {
  const [MedicalProviderData, setMedicalProviderData] = useState([]);
  const [MedicalSettingData, setMedicalSettingData] = useState([]);
  const [medicalSpecialtyData, setMedicalSpecialtyData] = useState([]);
  const [countryListData, setCountryListData] = useState([]);
  const [healthCareProviderValue, setHealthCareProviderValue] = useState(true);

  const { setValue, control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

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

  const { loading: countryListLoading, error: countryListError } = useQuery(
    GET_COUNTRIES_LIST,
    {
      onCompleted: (data) => {
        setCountryListData(data.countryList);
      },
    }
  );

  const onSubmit = (inputData) => {
    const userObj = {
      ...userData,
      firstName: inputData?.firstName,
      lastName: inputData?.lastName,
      country: inputData?.country,
      healthProvider: Boolean(inputData?.healthProvider),
      medicalProviderTypeId: inputData?.medicalProviderTypeId,
      medicalSpecialty: inputData?.medicalSpecialty,
      medicalSettingId: inputData?.medicalSettingId,
    };

    setUserData(() => userObj);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <CountrySelect
            control={control}
            name={"country"}
            loading={countryListLoading}
            error={countryListError}
            data={countryListData}
            size="small"
          />

          <RadioButtons
            control={control}
            name={"healthProvider"}
            healthCareProviderValue={healthCareProviderValue}
            setHealthCareProviderValue={setHealthCareProviderValue}
          />

          {healthCareProviderValue === true && (
            <>
              <SingleSelect
                control={control}
                name={"medicalProviderTypeId"}
                loading={medicalProviderLoading}
                error={medicalProviderError}
                data={MedicalProviderData}
                size="small"
                label="Medical Provider Type"
                disabled={!healthCareProviderValue}
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
                disabled={!healthCareProviderValue}
              />
              <SingleSelect
                control={control}
                name={"medicalSettingId"}
                loading={MedicalSettingLoading}
                error={MedicalSettingError}
                data={MedicalSettingData}
                size="small"
                label="Medical Setting"
                disabled={!healthCareProviderValue}
              />
            </>
          )}
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default PersonalForm;
