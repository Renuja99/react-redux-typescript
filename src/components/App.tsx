import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../state/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
      <div>

      </div>
      </Provider>
      
    </>
  )
}

export default App
