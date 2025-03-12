import './App.css'
import {Routes, Route} from 'react-router-dom'
import Main_Page from './components/pages/Main_Page'
function App() {

  return (
    <>
    <p>Apps</p>
    <Routes>  
      <Route path='/' element={<Main_Page/>}/>

   
    
    </Routes>      
    </>
  )
}

export default App
