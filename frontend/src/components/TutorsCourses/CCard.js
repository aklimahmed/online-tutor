import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from 'axios'
import "./CCard.scss";

const CCard = () => {
  return (
    <div>
          <Card bg="light" text="dark" style={{ width: "90%" }} className="mb-4">
          <Card.Body className="card_body">
            <Card.Title className="card_header">
              Math, Class-9{" "}
              <Badge className="badge_style" bg="secondary">
                Free
              </Badge>
            </Card.Title>
            <Card.Text className="batch_style">
              Batch: BMC8202103314 <br /><br />
            </Card.Text>
            <Card.Text className="time_style">
              10:00 am to 11:00 am
            </Card.Text>
            <Card.Text className="time_remaining_style">
            10m remaining
            </Card.Text>
          </Card.Body>
        </Card> 
    </div>
  );
};

export default CCard;
