import React from 'react'
import "./TeacherRegistrationPage.scss"
import student from "../../assets/student.jpg"
import StudentRegistration from '../../components/registration/StudentRegistration'

function StudentRegistrationPage() {
  return (
    <div className='teacherregistrationpage'>
      <div className='theader'>
        Student REGISTRATION
      </div>
      <div className='trcontainer'>
      <div className='rbox'>
      <StudentRegistration/>
      </div>
      <div className="timg">
        <img src={student} className="img"/>
      </div>
      </div>
    </div>
  )
}

export default StudentRegistrationPage