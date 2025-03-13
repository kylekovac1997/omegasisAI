import './App.css'
import {Routes, Route} from 'react-router-dom'
import Main_Page from './components/pages/Main_Page'
function App() {

  return (
    <>
    <Routes>  
      <Route path='/' element={<Main_Page/>}/>

   
    
    </Routes>      
    </>
  )
}

export default App
