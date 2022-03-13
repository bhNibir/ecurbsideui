import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;

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
        diseaseName
        descriptions
        diseaseCategories {
          id
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    diseasesCategories {
      id
      name
    }
  }
`;

export const GET_TREATMENT_BY_DISEASE_ID = gql`
  query GetTreatmentByDiseaseId($diseaseId: String!) {
    treatmentByDiseaseId(diseaseId: $diseaseId) {
      id
      treatmentName
      otherName
      image
      descriptions
      disease {
        id
        diseaseName
      }

      treatmentCategories {
        id
        name
      }

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
