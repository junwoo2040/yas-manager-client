import { GraphQLClient } from "graphql-request";

const requestHeaders = {
  authorization: "TOKEN",
};

const graphQLRequestClient = new GraphQLClient(
  "http://localhost:8000/graphql" as string,
  {
    headers: requestHeaders,
  },
);

export default graphQLRequestClient;
