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

export const USER_REGISTER = gql`
  mutation UserRegister(
    $firstName: String!
    $lastName: String!
    $country: String!
    $email: String!
    $username: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      country: $country
      email: $email
      username: $username
      password1: $password
      password2: $password
    ) {
      success
      errors
    }
  }
`;
export const USER_REGISTRATION = gql`
  mutation UserRegister(
    $email: String!
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    # $password2: String!
    $country: String!
    $medicalProviderTypeId: String!
    $healthProvider: Boolean!
    $medicalSpecialty: [String]!
    $medicalSettingId: String!
  ) {
    userRegistration(
      email: $email
      username: $username
      firstName: $firstName
      lastName: $lastName
      country: $country
      password1: $password
      password2: $password
      medicalSettingId: $medicalSettingId
      medicalSpecialty: $medicalSpecialty
      healthProvider: $healthProvider
      medicalProviderTypeId: $medicalProviderTypeId
    ) {
      success
      errors
    }
  }
`;

export const VERIFY_ACCOUNT = gql`
  mutation VerifyAccount($token: String!) {
    verifyAccount(token: $token) {
      success
      errors
    }
  }
`;

export const GET_AUTH_TOKEN = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
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

export const CREATE_DISEASE = gql`
  mutation diseasesCreation(
    $diseaseName: String!
    $descriptions: String!
    $diseaseCategoriesId: [ID]!
  ) {
    createDisease(
      diseaseName: $diseaseName
      descriptions: $descriptions
      diseaseCategoriesId: $diseaseCategoriesId
    ) {
      disease {
        id
        diseaseName
        descriptions
        diseaseCategories {
          id
        }
      }
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

export const CREATE_TREATMENT = gql`
  mutation treatmentCreation(
    $treatmentName: String!
    $otherName: String
    $treatmentCategoryId: ID!
    $diseaseId: ID!
    $descriptions: String!
  ) {
    createTreatment(
      treatmentName: $treatmentName
      otherName: $otherName
      treatmentCategoryId: $treatmentCategoryId
      diseaseId: $diseaseId
      descriptions: $descriptions
    ) {
      treatment {
        id
      }
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation reviewCreation($content: String!, $rating: Int!, $treatmentId: ID!) {
    createReview(
      content: $content
      rating: $rating
      treatmentId: $treatmentId
    ) {
      review {
        id
        rating
        content
        createdAt
        updatedAt
        createBy {
          id
          firstName
          lastName
          username
        }
      }
    }
  }
`;
