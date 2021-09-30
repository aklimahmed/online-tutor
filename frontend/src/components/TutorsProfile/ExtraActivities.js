import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const ExtraActivities = () => {
    return (
        <div className="weeklyTime_div">
            <h6 className="time_heading">Extra Activities</h6>
            <Row className="lesson-body">
                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Foreign Languages" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Volunteering & Fundraising" />
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Student Council" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Club Exec Board Position" />
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Sports" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Arts" />
                </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Studying Abroad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Resident Advisor (RA)"/>
                </Form.Group>
                </Col>
            </Row>
        </div>
    )
}

export default ExtraActivities
