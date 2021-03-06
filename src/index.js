import React from 'react'
import ReactDOM from 'react-dom'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-backend-one.now.sh/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
