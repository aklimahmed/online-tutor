import React from 'react'
import Today from '../../components/TutorDashboard/Today'
import { Row, Col } from 'react-bootstrap'
import LastSevenDays from '../../components/TutorDashboard/LastSevenDays'

const TutorDashboard = () => {
    return (
        <div>
            <Row>
                <Col md={2}>
                </Col>
                <Col md={8}>
                   <Today />
                   <LastSevenDays />
                </Col>
                <Col md={2}>
                </Col>
            </Row>
        </div>
    )
}

export default TutorDashboard
