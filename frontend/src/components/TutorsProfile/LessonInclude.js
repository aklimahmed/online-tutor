import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import "./LessonInclude.scss";

const LessonInclude = () => {
    return (
        <div className="weeklyTime_div">
            <h6 className="time_heading">Lesson Include</h6>
            <Row className="lesson-body">
                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Curriculam" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Proficiency Assesment" />
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Homework" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Quizzes/Tests" />
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Learning Materials" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Reading Exercise" />
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lesson Plans" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Writing Exercise"/>
                </Form.Group>
                </Col>
            </Row>
        </div>
    )
}

export default LessonInclude
