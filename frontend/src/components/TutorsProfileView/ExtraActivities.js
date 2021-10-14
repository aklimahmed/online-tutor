import {React, useEffect, useState} from 'react';

const ExtraActivities = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(props.exActivities);
    }, [props]);
  
    return (
        <div className="mt-5">
      <h5 className="qtext">Extra Activities</h5>
      {data ? (
        <ul className="list_items">
          {data.foreignLanguages === true ? <li>Foreign Languages</li> : ""}
          {data.Volunteering === true ? <li>Volunteering</li> : ""}
          {data.studentCouncil === true ? <li>Student Council</li> : ""}
          {data.clubExercise === true ? <li>Club Exercise</li> : ""}
          {data.sports === true ? <li>Sports</li> : ""}
          {data.arts === true ? <li>Arts</li> : ""}
          {data.studyingAbroad === true ? <li>Studying Abroad</li> : ""}
          {data.residentAdvisor === true ? <li>Resident Advisor</li> : ""}
        </ul>
      ) : (
        <ul></ul>
      )}
    </div>
    );
};

export default ExtraActivities;