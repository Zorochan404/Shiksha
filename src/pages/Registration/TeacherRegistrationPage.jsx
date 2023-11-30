import React from 'react'
import TeacherRegistration from '../../components/registration/TeacherRegistration'
import "./TeacherRegistrationPage.scss"
import professor from "../../assets/professor.jpg"

function TeacherRegistrationPage() {
  return (
    <div className='teacherregistrationpage'>
      <div className='theader'>
        TEACHER REGISTRATION
      </div>
      <div className='trcontainer'>
      <div className='rbox'>
      <TeacherRegistration/>
      </div>
      <div className="timg">
        <img src={professor} className="img"/>
      </div>
      </div>
    </div>
  )
}

export default TeacherRegistrationPage