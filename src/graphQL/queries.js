import { gql } from "@apollo/client";

export const GET_MEDICAL_PROVIDER = gql`
  query GetMedicalProvider {
    medicalProvider {
      id
      name
    }
  }
`;

export const GET_MEDICAL_SETTING = gql`
  query GetMedicalSetting {
    medicalSetting {
      id
      name
    }
  }
`;

export const GET_COUNTRIES_LIST = gql`
  query GetCountryList {
    countryList {
      name
      code
    }
  }
`;

export const GET_DISEASES = gql`
  query GetDiseases {
    diseases {
      id
      diseaseName
      diseaseCategories {
        id
        name
      }
      favoriteDisease {
        isFavorite
      }
      descriptions
      createBy {
        id
        firstName
        lastName
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_DISEASE_CATEGORIES = gql`
  query GetDiseaseCategories {
    diseasesCategories {
      id
      name
    }
  }
`;

export const GET_DISEASE_BY_ID = gql`
  query GetDiseaseById($id: String!) {
    diseaseById(id: $id) {
      id
      diseaseName
      descriptions
      diseaseCategories {
        id
        name
      }
      createBy {
        id
        firstName
        lastName
        username
      }
      createdAt
      updatedAt

      treatments {
        id
        treatmentName
        imageUrl
        treatmentCategories {
          id
          name
        }
        otherName
        descriptions
        totalReviews
        avgRating
        createBy {
          id
          username
        }
      }
    }
  }
`;

export const GET_TREATMENT_BY_ID = gql`
  query GetTreatmentById($id: String!) {
    treatmentById(id: $id) {
      id
      treatmentName
      descriptions
      imageUrl
      treatmentCategories {
        id
        name
      }
      otherName
      descriptions
      disease {
        id
        diseaseName
      }
      createBy {
        id
        firstName
        lastName
        username
      }
      avgRating
      createdAt
      updatedAt
      reviews {
        id
        content
        rating
        createBy {
          id
          firstName
          lastName
          username
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_TREATMENT_CATEGORIES = gql`
  query GetTreatmentCategories {
    treatmentsCategories {
      id
      name
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    me {
      id
      username
      email
      profilePicture
      firstName
      lastName
      healthProvider
      country {
        name
        code
        iocCode
      }
      medicalSetting {
        id
        name
      }
      medicalProviderType {
        id
        name
      }
      medicalSpecialty {
        id
        name
      }
    }
  }
`;
