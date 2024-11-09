import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/read/:id' element={<Read/>}/>

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App;
