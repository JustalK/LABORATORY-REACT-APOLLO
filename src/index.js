/**
 * The module managing the entry point of the APP
 * @module Main
 */

import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import App from '@src/App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
})

/**
 * @function render
 * Render the Home component inside the element root of the index page
 */
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
