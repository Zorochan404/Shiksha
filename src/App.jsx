import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import TeacherRegistrationPage from './pages/Registration/TeacherRegistrationPage'
import StudentRegistrationPage from './pages/Registration/StudentRegistrationPage'
import LoginPage from './pages/login/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="/studentregister" element={<StudentRegistrationPage />}/>
    <Route path="/teacherregister" element={<TeacherRegistrationPage />}/>
    </Routes>
    </BrowserRouter>
      {/* <TeacherRegistrationPage/> */}
      {/* <StudentRegistrationPage/> */}
      {/* <LoginPage/> */}
    </>
  )
}

export default App
