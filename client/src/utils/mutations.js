import { gql } from "@apollo/client";

export const ADD_EMPLOYEE = gql`
  mutation addEmployee($name: String!, $username: String!, $password: String!) {
    addEmployee(name: $name, username: $username, password: $password) {
      token
      employee {
        _id
        name
        username
      }
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

export const EMPLOYEE_LOGIN = gql`
  mutation employeeLogin($username: String!, $password: String!) {
    employeeLogin($username: username, $password: password) {
      employee {
        _id
        name
        username
      }
    }
  }
`;

export const ADD_VIDEO = gql`
  mutation addVideo($title: String!, $videoLink: String!) {
    addVideo(title: $title, videoLink: $videoLink) {
      _id
      title
      videoLink
    }
  }
`;

export const REMOVE_EMPLOYEE = gql`
  mutation removeEmployee($employeeId: ID!) {
    removeEmployee(employeeId: $employeeId) {
      _id
      name
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
