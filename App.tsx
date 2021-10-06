import React from 'react';
import Provider from './src/Providers/Provider';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/apolloClient';





export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider />
    </ApolloProvider>
  );
}