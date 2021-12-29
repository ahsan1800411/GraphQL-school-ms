const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    students(filter: FilterPresentStduent): [Student!]!
    teachers: [Teacher!]!
    student(id: ID!): Student
    teacher(id: ID!): Teacher!
  }
  type Mutation {
    addTeacher(input: addTeacherInput!): Teacher!
    addStudent(input: addStudentInput!): Student!
    updateStudent(id: ID!, input: updateStudentInput!): Student
    deleteStudent(id: ID!): Boolean
  }

  type Student {
    id: ID!
    name: String!
    age: Int!
    marks: Int!
    image: String!
    isPresent: Boolean!
    teacher: Teacher!
    reviews: [Review!]!
  }

  type Teacher {
    id: ID!
    name: String!
    students: [Student!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int
  }
  input FilterPresentStduent {
    isPresent: Boolean
  }
  input addTeacherInput {
    name: String!
  }
  input addStudentInput {
    name: String!
    age: Int!
    marks: Int!
    image: String!
    isPresent: Boolean!
    teacherId: ID!
  }
  input updateStudentInput {
    name: String!
    age: Int!
    marks: Int!
    image: String!
    isPresent: Boolean!
    teacherId: ID!
  }
`;
