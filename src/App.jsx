import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupPage/SignupForm'
import ProfileCreation from './components/Profile/ProfileCreation';
import DribbleOptions from './components/DribbleOptions/DribbleOptions';
import LandingPage from './components/landingpage/LandingPage';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/profile-creation" element={<ProfileCreation />} />
        <Route path='/dribble-options' element={<DribbleOptions/>}/>
        <Route path='/landing-page' element={<LandingPage/>}/>
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
