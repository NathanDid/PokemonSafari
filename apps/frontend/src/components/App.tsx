import { StrictMode } from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import saga from '../saga'

const store = configureStore(saga)

export default function App() {
  return (
    <Provider store={store}>
      <StrictMode>
        <Main />
      </StrictMode>
    </Provider>
  )
}
