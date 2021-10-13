import {React, useEffect, useState} from "react";

const AboutMe = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.aboutMe);
  }, [props]);

  return (
    <div>
      <div className="mt-5">
        <h5 className="qtext">About Me</h5>
        {data ? <p>{data.aboutMe}</p>: ""}
      </div>
      <div className="mt-5">
        <h5 className="qtext">About My Session</h5>
        {data ? <p>{data.aboutSession}</p> : ""}
      </div>
    </div>
  );
};

export default AboutMe;
