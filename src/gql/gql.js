import { gql } from "@apollo/client";

export const USER_REGISTER = gql`
  mutation UserRegister(
    $email: String!
    $username: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    register(
      email: $email
      username: $username
      firstName: $firstName
      lastName: $lastName
      password1: $password
      password2: $password
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
        professionalProfile {
          medicalSpecialty {
            id
            name
          }
        }
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

      createBy {
        id
        firstName
        lastName
        username
      }
      avgRating
      createdAt
      updatedAt
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
