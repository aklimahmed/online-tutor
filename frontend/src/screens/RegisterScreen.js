import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [role, setRole] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
      dispatch(register(role, name, email, phone, password))
  }

  return (
    <Row>
      <Col md={2}>
      </Col>
      <Col md={8} style={{border: '1px solid rgba(153, 150, 150, 0.671)', paddingTop: '60px', paddingBottom: '20px'}}>
      <FormContainer>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
      <h7>I am a:</h7>
      <br />
      <br />
      <Form.Group>
      <Form.Check
        inline
        label={<span style={{color: '#1DB6C5'}}>Student</span>}
        name="group1"
        type='radio'
        id='inline-radio'
        value={role}
        onChange={() => setRole(1)}
      />
      <Form.Check
        inline
        label={<span style={{color: '#1DB6C5'}}>Parent</span>}
        name="group1"
        type='radio'
        id='inline-radio'
        value={role}
        onChange={() => setRole(2)}
      />
      <Form.Check
        inline
        label={<span style={{color: '#1DB6C5'}}>Tutor</span>}
        name="group1"
        type='radio'
        id='inline-radio'
        value={role}
        onChange={() => setRole(3)}
      />
      </Form.Group>




        <Form.Group controlId='name'>
          <Form.Control
            type='name'
            placeholder='Enter your full name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Control
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Control
            type='name'
            placeholder='Enter your phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        

      <Row className='py-3'>
        <Col>
          Already have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            <span style={{color: '#1DB6C5', fontWeight: 'bold'}}>Sign in</span>
          </Link>
          <br/>
          By creating an account, you agree to  Tutory's User <span style={{color: '#1DB6C5'}}>Privacy Policy</span> and <span style={{color: '#1DB6C5'}}>Terms and Conditions</span>.
        </Col>
      </Row>
      <Button style={{float: 'right'}} type='submit' variant="info">
          Sign up
        </Button>
      </Form>
    </FormContainer>
      </Col>
      <Col md={2}>
      </Col>
    </Row>
    
  )
}

export default RegisterScreen
