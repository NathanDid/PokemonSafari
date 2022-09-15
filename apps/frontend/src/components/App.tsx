import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { StrictMode } from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

const client = new ApolloClient({
  uri: `${process.env.API_HOST}/graphql/`,
  cache: new InMemoryCache()
})

const store = configureStore()

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
