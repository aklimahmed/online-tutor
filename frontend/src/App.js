import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/common/Header/Header'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import TutorsProfile from './screens/TutorsProfile/TutorsProfile'
import TutorProfileView from './screens/TutorProfileView/TutorProfileView';
import TutorDashboard from './screens/TutorDashboard/TutorDashboard'
import TutorsMessage from './screens/TutorsMessage/TutorsMessage'
import StudentsForm from './screens/StudentsForm/StudentsForm'
import TutorsCourseAdd from './screens/TutorsCourses/TutorsCourseAdd'
import TutorProfileEdit from './screens/TutorProfileEdit/TutorProfileEdit'
import TutorsCoursesView from './screens/TutorsCourses/TutorsCoursesView'
import TutorsCourseEdit from './screens/TutorsCourseEdit/TutorsCourseEdit'
import TutorsSingleCourse from './screens/TutorsCourses/TutorsSingleCourse'
// awElJHf1SwmAYanM

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/tutorsform/:id' component={TutorsProfile} />
          <Route path='/tutorsprofile/:id' component={TutorProfileView} />
          <Route path='/tutorsprofileedit/:id' component={TutorProfileEdit} />
          <Route path='/tutorsdashboard/:id' component={TutorDashboard} />
          <Route path='/tutorsmessage/:id' component={TutorsMessage} />  
          <Route path='/studentsform/:id' component={StudentsForm} />
          <Route exact path='/course/tutor/:id' component={TutorsCourseAdd} />
          <Route path='/course/tutor/view/:id' component={TutorsCoursesView} />
          <Route path='/course/tutor/edit/:id' component={TutorsCourseEdit} />
          <Route path='/course/tutor/singlecourse/:id' component={TutorsSingleCourse} />
        </Container>
      </main>
     
    </Router>
  )

}

export default App
