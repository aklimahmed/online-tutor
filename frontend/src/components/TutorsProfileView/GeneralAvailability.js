import { React, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const GeneralAvailability = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.WeeklyTime);
  }, [props]);

  return (
    <div className="mt-5">
      <h5 className="qtext">General Availability</h5>
      <table className="qualification_table mt-3">
        <thead>
          <tr>
            <th>
              <small>Time</small>
            </th>
            <th>
              <small>Sat</small>
            </th>
            <th>
              <small>Sun</small>
            </th>
            <th>
              <small>Mon</small>
            </th>
            <th>
              <small>Tue</small>
            </th>
            <th>
              <small>Wed</small>
            </th>
            <th>
              <small>Thu</small>
            </th>
            <th>
              <small>Fri</small>
            </th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((data) => (
              <tr key={data.id}>
                <td data-label="Time">
                  <small>{data.from} - {data.to}</small>
                </td>
                <td data-label="Sat">
                  {data.sat === true ? (<FaCheck />): ""}
                </td>
                <td data-label="Sun">
                  {data.sun === true ? (<FaCheck />): ""}
                </td>
                <td data-label="Mon">
                  {data.mon === true ? (<FaCheck />): ""}
                </td>
                <td data-label="Tue">
                  {data.tue === true ? (<FaCheck />): ""}
                </td>
                <td data-label="Wed">
                  {data.wed === true ? (<FaCheck />): ""}
                </td>
                <td data-label="Thu">
                  {data.thu === true ? (<FaCheck />): ""}
                </td>
                <td data-label="Fri">
                  {data.fri === true ? (<FaCheck />): ""}
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralAvailability;
