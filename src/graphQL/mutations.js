import { gql } from "@apollo/client";

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

export const AUTH_TOKEN = gql`
  mutation TokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
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
export const CREATE_FAVORITE_DISEASE = gql`
  mutation FavoriteDiseaseCreation($diseaseId: ID!, $isFavorite: Boolean!) {
    createFavoriteDisease(diseaseId: $diseaseId, isFavorite: $isFavorite) {
      favoriteDisease {
        id
        createdAt
        updatedAt
        user {
          id
          firstName
          lastName
          username
        }
      }
    }
  }
`;
