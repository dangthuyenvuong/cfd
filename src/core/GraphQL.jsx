import { ApolloClient, InMemoryCache } from '@apollo/client';

const GraphQLClient = new ApolloClient({
  uri: 'http://localhost:8888/graphql',
  cache: new InMemoryCache()
});



export default GraphQLClient