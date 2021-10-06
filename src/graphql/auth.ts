import gql from "graphql-tag";

export const SIGNIN_USER = gql`
  mutation SIGNIN_USER($email: string, $password: string) {
    signIn(email: $email, password: $password) {
      id
      username
      email
      createdAt
      roles
    }
  }
`;
