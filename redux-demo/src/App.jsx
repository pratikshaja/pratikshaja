
import './App.css'
import {Provider} from 'react-redux'
import store from './containers/store'
import BookContainer from './components/BookContainer'

function App() {

  return (
    <>
    <Provider store={store}>
      <BookContainer/>

    </Provider>
      
    </>
  )
}

export default App
