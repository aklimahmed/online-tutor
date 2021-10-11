import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Row, Col } from 'react-bootstrap'
import "./Charts.scss"

const datavalues = {
    male: 60,
    female: 40,
    paid: 10000,
    unpaid: 2000
}

const genderdata = {
    labels: ['Male Students', 'Female Students'],
    datasets: [
      {
        label: '# of Votes',
        data: [datavalues.male, datavalues.female],
        backgroundColor: [
          '#1F78B4',
          '#A6CEE3',
        ],
        borderColor: [
          '#1F78B4',
          '#A6CEE3'
        ],
        borderWidth: 1,
      },
    ],
  };

  const payment = {
    labels: ['Paid', 'Unpaid'],
    datasets: [
      {
        label: '# of Votes',
        data: [10000, 2000],
        backgroundColor: [
          '#FF00C4',
          '#F1B1E8',
        ],
        borderColor: [
          '#FF00C4',
          '#F1B1E8'
        ],
        borderWidth: 1,
      },
    ],
  };


const Charts = () => {
    return (
        <div>
            <Row>
                <Col className="weeklyTime_div_3">
                    <Doughnut data={genderdata} />
                    <Row>
                    <Col md={6} className="text-center">
                        <p>
                        Male Students<br />
                        </p>
                    </Col>
                   
                    <Col md={6} className="text-center">
                        Female Students <br />
                        {datavalues.female}
                    </Col>
                    </Row>
                </Col>

                <Col className="weeklyTime_div_3">
                <Doughnut data={payment} />
                <Row>
                    <Col md={6} className="text-center">
                        Paid<br />
                        {datavalues.paid}
                    </Col>
                   
                    <Col md={6} className="text-center">
                        Unpaid<br />
                        {datavalues.unpaid}
                    </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Charts
