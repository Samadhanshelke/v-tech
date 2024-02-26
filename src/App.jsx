import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import HomePage from './page/HomePage'

import ContactUs from './page/ContactUs'
import AboutUs from './page/AboutUs'
import DesignAndEngineering from './components/common/DesignAndEngineering'
function App() {


  return (
    <div className=' tracking-wider antialiased bg-gray-100'>
       <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/design-and-engineering' element={<DesignAndEngineering/>}/>
        </Routes>
 
      </BrowserRouter>
    </div>
  )
}

export default App
