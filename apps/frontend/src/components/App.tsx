import { StrictMode } from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const store = configureStore()

const client = new ApolloClient({
  uri: `${process.env.API_HOST}/graphql/`,
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <Provider store={store}>
      <StrictMode>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </StrictMode>
    </Provider>
  )
}
