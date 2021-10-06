import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/common/Header/Header'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import TutorsProfile from './screens/TutorsProfile/TutorsProfile'
import TutorProfileView from './screens/TutorProfileView/TutorProfileView';
// awElJHf1SwmAYanM

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/tutorsprofileform/:id' component={TutorsProfile} />
          <Route path='/tutorsprofile/:id' component={TutorProfileView} />         
        </Container>
      </main>
     
    </Router>
  )

}

export default App
