import React from "react";
import "./VideoIntro.scss";
import { Link } from "react-router-dom";

const VideoIntro = () => {
  return (
    <div className="sticky-top">
      <div className="video_intro_main">
        <h6 className="intro_title pt-1">My Video</h6>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <div className="d-flex justify-content-between class_list">
          <Link className="link_style" to="/">
            <small>Free Class List</small>
          </Link>
          <p style={{ marginBottom: 0 }}>|</p>
          <Link className="link_style" to="/">
            <small>Upcoming Class List</small>
          </Link>
        </div>
        <div className="enroll_button">
          <Link to="/" className="btn btn-enroll">
            ENROLL NOW
          </Link>
          <Link to="/" className="btn btn-message">
            MESSAGE
          </Link>
        </div>
      </div>
      <div className="trail_lesson">
        <h6 className="intro_title pt-1">Trail Lesson</h6>
        <p>One Time, 30 minutes</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <small>You are welcome for Trail Lesson</small>
            <p>
              <small>No</small>
              <span className="cost"> Cost</span>
            </p>
          </div>
          <div className="free_class_button">
              <h5 className="zero_title">0</h5>
              <small className="zero_des">BDT/HR</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
