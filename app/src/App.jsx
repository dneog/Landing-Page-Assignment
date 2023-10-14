
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
   </div>
  )
  
}

export default App
