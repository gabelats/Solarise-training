import { gql } from "@apollo/client";

export const EMPLOYEE_LOGIN = gql`
  mutation EmployeeLogin($username: String!, $password: String!) {
    employeeLogin(username: $username, password: $password) {
      name
      _id
      username
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin {
        _id
        name
        username
        email
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String!, $username: String!, $password: String!) {
    addEmployee(name: $name, username: $username, password: $password) {
      _id
      name
      username
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation addAdmin(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addAdmin(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      name
      email
      password
      username
    }
  }
`;
export const ADD_VIDEO = gql`
  mutation addVideo($title: String!, $videoLink: String!, $day: String!) {
    addVideo(title: $title, videoLink: $videoLink, day: $day) {
      _id
      title
      videoLink
      day
    }
  }
`;

export const REMOVE_EMPLOYEE = gql`
  mutation removeEmployee($username: String!) {
    removeEmployee(username: $username) {
      username
    }
  }
`;

export const REMOVE_VIDEO = gql`
  mutation removeVideo($videoId: ID!) {
    removeVideo(videoId: $videoId) {
      _id
      title
      videoLink
    }
  }
`;
