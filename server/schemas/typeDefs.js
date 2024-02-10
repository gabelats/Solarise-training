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
    titel: String
    video: String
  
  }

  type Auth {
    token: ID!
    admin: Admin
  }

  type Query {
    employees: [Employee]
    employee(username: String!): Employee
    videos: Video
    video(videoId: ID!): Video
    me: Admin
  }

  type Mutation {
    addEmployee(name: String!, username: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addVideo(title: String!, videoLink: String!): Admin
    
    removeEmployee(employeeId: ID!): Auth
    removeVideo(videoId: ID!): Auth
  }
`;

module.exports = typeDefs;
