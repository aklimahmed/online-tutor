import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/common/Message";
import Loader from "../../components/common/Loader";
import FormContainer from "../../components/common/FormContainer";
import { register } from "../../actions/userActions";
import "./RegisterScreen.scss";
import { HiOutlineMail } from "react-icons/hi";

const RegisterScreen = ({ location, history }) => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(role, email, password));
  };

  return (
    // <Row>
    //   <Col md={2}>
    //   </Col>
    //   <Col md={8} style={{border: '1px solid rgba(153, 150, 150, 0.671)', paddingTop: '60px', paddingBottom: '20px'}}>
    //   <FormContainer>
    //   {message && <Message variant='danger'>{message}</Message>}
    //   {error && <Message variant='danger'>{error}</Message>}
    //   {loading && <Loader />}
    //   <Form onSubmit={submitHandler}>
    //   <h6>I am a:</h6>
    //   <Form.Group>
    //   <Form.Check
    //     inline
    //     label={<span style={{color: '#1DB6C5'}}>Student</span>}
    //     name="group1"
    //     type='radio'
    //     id='inline-radio'
    //     value={role}
    //     onChange={() => setRole('student')}
    //   />
    //   <Form.Check
    //     inline
    //     label={<span style={{color: '#1DB6C5'}}>Parent</span>}
    //     name="group1"
    //     type='radio'
    //     id='inline-radio'
    //     value={role}
    //     onChange={() => setRole('parent')}
    //   />
    //   <Form.Check
    //     inline
    //     label={<span style={{color: '#1DB6C5'}}>Tutor</span>}
    //     name="group1"
    //     type='radio'
    //     id='inline-radio'
    //     value={role}
    //     onChange={() => setRole('tutor')}
    //   />
    //   </Form.Group>

    //     <Form.Group controlId='email'>
    //       <Form.Control
    //         type='email'
    //         placeholder='Enter your email address'
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //     <Form.Group controlId='password'>
    //       <Form.Control
    //         type='password'
    //         placeholder='Enter your password'
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       ></Form.Control>
    //     </Form.Group>

    //   <Row className='py-3'>
    //     <Col>
    //       Already have an account?{' '}
    //       <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
    //         <span style={{color: '#1DB6C5', fontWeight: 'bold'}}>Sign in</span>
    //       </Link>
    //       <br/>
    //       By creating an account, you agree to  Tutory's User <span style={{color: '#1DB6C5'}}>Privacy Policy</span> and <span style={{color: '#1DB6C5'}}>Terms and Conditions</span>.
    //     </Col>
    //   </Row>
    //   <Button style={{float: 'right'}} type='submit' variant="info">
    //       Sign up
    //     </Button>
    //   </Form>
    // </FormContainer>
    //   </Col>
    //   <Col md={2}>
    //   </Col>
    // </Row>

    <div className="mt-5">
      <div className="d-flex justify-content-center pb-2">
        <Link className="sign underline" to="/login">
          SIGN IN
        </Link>
        <p className="px-2 sign">|</p>
        <Link className="sign underline" to="/register">
          SIGN UP
        </Link>
      </div>
      <div className="main_login mt-2 mx-auto">
        <p className="pt-3 font_style radio_button pb-2">I am a:</p>
        <form>
          <div className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={role}
                onChange={() => setRole("student")}
                required
              />
              <label className="form-check-label font_style radio_button">
                Student
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={role}
                onChange={() => setRole("parent")}
                required
              />
              <label className="form-check-label font_style radio_button">
                Parent
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value={role}
                onChange={() => setRole("tutor")}
                required
              />
              <label className="form-check-label font_style radio_button">
                Tutor
              </label>
            </div>
          </div>
          <div className="email mt-2">
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <HiOutlineMail className="i" />
          </div>
          <div className="email mt-2">
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <HiOutlineMail className="i" />
          </div>
          <div className="email mt-2">
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <HiOutlineMail className="i" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
