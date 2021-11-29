import React from 'react'
import Example from './components/Example'
import {GlobalProvider} from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      app
      <Example />
    </GlobalProvider>
  )
}

export default App
