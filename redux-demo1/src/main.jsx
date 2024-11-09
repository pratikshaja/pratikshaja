import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import combineReducers from './services/reducers/index.js'

const store= createStore(combineReducers)
console.log("store data", store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <App></App> 
    </Provider>
    
  </StrictMode>,
)
