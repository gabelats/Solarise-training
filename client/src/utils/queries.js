import { gql } from "@apollo/client";

export const QUERY_EMPLOYEES = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      video {
        _id
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      employees {
        _id
        username
        name
      }
    }
  }
`;

export const QUERY_VIDEOS = gql`
  query allVideos {
    videos {
      _id
      title
      day
      videoLink
    }
  }
`;
