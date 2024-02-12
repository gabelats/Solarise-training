const typeDefs = `
  type Admin {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    employees: [Employee]!
  }

  type Employee {
    _id: ID
    name: String
    username: String
    password: String
    video: [Video]
  }

  type Video {
    _id: ID
    title: String
    videoLink: String
    day: String
  
  }

  type Auth {
    token: ID!
    admin: Admin
  }

  type Query {
    employees: [Employee]
    employee(username: String!): Employee
    videos: [Video]
    video(videoId: ID!): Video
    me: Admin
  }

  type Mutation {
    addEmployee(name: String!, username: String!, password: String!): Employee
    login(email: String!, password: String!): Auth
    employeeLogin(username: String!, password: String!): Employee
    addVideo(title: String!, videoLink: String!, day: String!): Video
    removeEmployee(employeeId: ID!): Employee
    removeVideo(videoId: ID!): Video
  }
`;

module.exports = typeDefs;
