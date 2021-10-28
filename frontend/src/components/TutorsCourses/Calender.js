import React, { useState, useEffect }  from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'

import Calendar from 'react-awesome-calendar';


const Calender = () => {

    
const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-10-10T18:00:00+00:00',
    to: '2021-10-10T19:00:00+00:00',
    title: 'This is an event'
}];

    const [fetchCourseDetails, setFetchCourseDetails] = useState([]);



    const id = useSelector((state) => state.userLogin.userInfo._id);
  
    const getData = () => {
      axios
        .get(`http://localhost:5000/api/course/tutor/view/${id}`)
        .then((data) => setFetchCourseDetails(data.data.course));
    };
  
    useEffect(() => {
      getData();
    },[]);

    console.log(events)
    

    return (
        <div>
            <Calendar
                events={events}
            />
        </div>
    )
}

export default Calender
