import React from "react";
import { FaCheck } from "react-icons/fa";

const GeneralAvailability = () => {
  return (
    <div className="mt-5">
      <h5 className="qtext">General Availability</h5>
      <table class="qualification_table mt-3">
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
          <tr>
            <td data-label="Time"><small>9pm-10pm</small></td>
            <td data-label="Sat">
              <FaCheck />
            </td>
            <td data-label="Sun">&nbsp;</td>
            <td data-label="Mon">&nbsp;</td>
            <td data-label="Tue">
              <FaCheck />
            </td>
            <td data-label="Wed">&nbsp;</td>
            <td data-label="Thu">&nbsp;</td>
            <td data-label="Fri">
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td data-label="Time"><small>10pm-11pm</small></td>
            <td data-label="Sat">
              <FaCheck />
            </td>
            <td data-label="Sun">&nbsp;</td>
            <td data-label="Mon">
              <FaCheck />
            </td>
            <td data-label="Tue">&nbsp;</td>
            <td data-label="Wed">&nbsp;</td>
            <td data-label="Thu"><FaCheck /></td>
            <td data-label="Fri">
              <FaCheck />
            </td>
          </tr>
          <tr>
            <td data-label="Time"><small>11pm-12pm</small></td>
            <td data-label="Sat">
              <FaCheck />
            </td>
            <td data-label="Sun">&nbsp;</td>
            <td data-label="Mon">
              <FaCheck />
            </td>
            <td data-label="Tue">&nbsp;</td>
            <td data-label="Wed">&nbsp;</td>
            <td data-label="Thu"><FaCheck /></td>
            <td data-label="Fri">
              <FaCheck />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GeneralAvailability;
