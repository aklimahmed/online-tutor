import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import './Login.css'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fbloggedin, setFbloggedin] = useState(false)
  const [code, setCode] = useState('')
  const [errormessage, setErrormessage] = useState('')

  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }

  const responseFacebook = (response) => {
    console.log(response)
    setFbloggedin(true)
  }

  const handleSuccess = (data) => {
    setCode(data.code)
    setErrormessage('')
  }

  const handleFailure = (error) => {
    setCode('')
    setErrormessage(error.errorMessage)
  }

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Row style={{border: '1px solid rgba(153, 150, 150, 0.671)', paddingTop: '60px', paddingBottom: '20px'}}>
      <Col md={6}>
      <h6>Sign in with Social Accounts</h6>
                <br/>
                  <div className="social-buttons">
                  <GoogleLogin 
                    clientId="788609894091-urvuv0rsjt87faa2o1chigmdmcgo2vhj.apps.googleusercontent.com"
                    render={renderProps => (
                      <button onClick={renderProps.onClick} style={{width: '50%', height: '50px', color: 'white', backgroundColor: '#CA5340',
                      textTransform: 'uppercase', fontWeight: 'bold', border: '0px'}}> Sign in with Google</button>
                    )}
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                  <br />
                  <br />
                
                  <FacebookLogin
                      appId="1574186746261511"
                      autoLoad={true}
                      fields="name,email,picture"
                      textButton="Sign in with Facebook"
                      //onClick={componentClicked}
                      callback={responseFacebook} 
                      />
                      <br />
                      <br />
                      
                      
        <LinkedIn
          clientId="86ygpegk8ma62w"
          onFailure={handleFailure}
          onSuccess={handleSuccess}
          redirectUri="https://localhost:3000/"
          style={{backgroundColor: '#2C8DB2', width: '50%', height: '50px', border: '0px', color: 'white'}}
        >
        SIGN IN WITH LINKEDIN
        </LinkedIn>
     
                      <Row className='py-3'>
        <Col>
          Are you new?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Sign up
          </Link>
        </Col>
      </Row>
                    </div>

                   
      </Col>
      <div class = "vertical"></div>
      <Col md={6}>
      <h6>Sign in with Social Accounts</h6>
      <br/>
      <FormContainer>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Row} className="mb-1" controlId="formHorizontalCheck">
    <Col>
      <Form.Check label="Remember me" />
    </Col>
    <Col>
        <p>Forget Password?</p>
    </Col>
  </Form.Group>

        <Button style={{float: 'right'}} type='submit' variant='info'>
          Sign In
        </Button>
      </Form>

      
    </FormContainer>
      </Col>
    </Row>
    
  )
}

export default LoginScreen
