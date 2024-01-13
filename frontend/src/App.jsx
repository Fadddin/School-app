import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbaar from './components/Navbaar'
import About from './pages/About'
import Campus from './pages/Campus'
import Notice from './pages/Notice'
import Contact from './pages/Contact'
import Addmission from './pages/Addmission'


function App() {

  return (
    <Router>
    <>
      <Navbaar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Campus' element={<Campus/>} />
          <Route path='/Notice' element={<Notice/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Admission' element={<Addmission/>} />

        </Routes>
    </>
    </Router>
  )
}

export default App
