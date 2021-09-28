<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
// awElJHf1SwmAYanM

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
         
        </Container>
      </main>
     
    </Router>
  )
=======
import React from "react";
import Header from "./components/common/Header/Header";

function App() {
  return (
    <div className="App">
     <Header/>
    </div>
  );
>>>>>>> 38847d6a1b21b4596a16ec9ae52c3ca33759209b
}

export default App
