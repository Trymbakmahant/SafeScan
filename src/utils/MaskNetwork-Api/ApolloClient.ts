import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-graphql-api.com/graphql", // Replace with your GraphQL API URL
  cache: new InMemoryCache(),
});

export default client;
