import {React, useState, useEffect} from "react";

const ExtraQualifications = (props) => {

  const [data, setData] = useState([]);


  useEffect(() => {
    setData(props.exQualification)
  },[props]);


  const tableData = () =>{
    data.map(data =>{
      <tr key={data.id}>
    <td data-label="Degree">
      <small>{data.courseTitle}</small>
    </td>
    <td data-label="Duration">
      <small>{data.duration}</small>
    </td>
    <td data-label="Passing Year">
      <small>{data.year}</small>
    </td>
    <td data-label="Institute">
      <small>{data.institute}</small>
    </td>
  </tr>
    })
  }

  return (
    <div className="mt-5">
      <h5 className="qtext">Extra Qualifications or Trainings</h5>
      <table class="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Course Title</small>
            </th>
            <th>
              <small>Duration</small>
            </th>
            <th>
              <small>Passing Year</small>
            </th>
            <th>
              <small>Institute</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            tableData
          }
        </tbody>
      </table>
    </div>
  );
};

export default ExtraQualifications;
