import { gql } from "@apollo/client";

export const USER_REGISTRATION = gql`
  mutation UserRegister(
    $email: String!
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $country: String!
    $healthProvider: Boolean!
    $medicalProviderType: ID
    $medicalSpecialty: [ID]
    $medicalSetting: ID
  ) {
    userRegistration(
      email: $email
      username: $username
      firstName: $firstName
      lastName: $lastName
      country: $country
      password1: $password
      password2: $password
      medicalSetting: $medicalSetting
      medicalSpecialty: $medicalSpecialty
      healthProvider: $healthProvider
      medicalProviderType: $medicalProviderType
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
export const SEND_PASSWORD_RESET_EMAIL = gql`
  mutation SendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      success
      errors
    }
  }
`;

export const PASSWORD_RESET = gql`
  mutation PasswordReset(
    $token: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    passwordReset(
      token: $token
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
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
        treatmentName
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
