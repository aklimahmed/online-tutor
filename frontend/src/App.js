import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/common/Header/Header'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import TutorsProfile from './screens/TutorsProfile/TutorsProfile'
// awElJHf1SwmAYanM

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/tutorsprofile/:id' component={TutorsProfile} />
         
        </Container>
      </main>
     
    </Router>
  )

}

export default App
