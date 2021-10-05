import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/common/Message";
import Loader from "../../components/common/Loader";
import FormContainer from "../../components/common/FormContainer";
import { login } from "../../actions/userActions";
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./LoginScreen.scss";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fbloggedin, setFbloggedin] = useState(false);
  const [code, setCode] = useState("");
  const [errormessage, setErrormessage] = useState("");

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const responseFacebook = (response) => {
    console.log(response);
    setFbloggedin(true);
  };

  const handleSuccess = (data) => {
    setCode(data.code);
    setErrormessage("");
  };

  const handleFailure = (error) => {
    setCode("");
    setErrormessage(error.errorMessage);
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        <Link className="sign" to="/login">
          SIGN IN
        </Link>
        <p className="px-2 sign">|</p>
        <Link className="sign" to="/register">
          SIGN UP
        </Link>
      </div>
      <Row className="main_login mt-2">
        <Col md={5}>
          <p className="form_heading">Sign in with Social Accounts</p>
          <ul className="ul-style">
            <li>
              <Button className="google rounded-pill mb-3">
                <FaGooglePlusG /> Sign in with Google
              </Button>{" "}
            </li>
            <li>
              <Button className="facebook rounded-pill mb-3">
                <FaFacebookF /> Sign in with Facebook
              </Button>{" "}
            </li>
            <li>
              <Button className="linkedIn rounded-pill mb-3">
                <FaLinkedinIn /> Sign in with Linkedin
              </Button>{" "}
            </li>
          </ul>
          <small>
            Are you new?{" "}
            <Link className="sign new_sign" to="/register">
              Sign up
            </Link>
          </small>
        </Col>
        <Col md={2} className="d-flex justify-content-center">
          <div className="lining">
            <hr className="hr-padding" width="2" size="50" />
            <p>OR</p>
            <hr className="hr-padding" width="2" size="50" />
          </div>
          <div className="lining-mobile">
            <p className="mt-5 mb-5">---------- OR ----------</p>
          </div>
        </Col>
        <Col md={5}>
          <p className="form_heading">Sign in with your email and password</p>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {error && <Message variant="danger">{error}</Message>}
            <div className="d-flex justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label={<small>Remember me</small>}
                />
              </Form.Group>
              <p className="new_sign">
                <small>Forgot Password?</small>
              </p>
            </div>
            <Button className="submit_button rounded-pill" type="submit">
              Sign in
            </Button>{" "}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginScreen;
