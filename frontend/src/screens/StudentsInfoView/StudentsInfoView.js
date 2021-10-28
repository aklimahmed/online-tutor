import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'

const StudentsInfoView = () => {

    const id = useSelector((state) => state.userLogin.userInfo._id);

    const [student, setStudent] = useState([])
    

    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/student/${id}`)
        .then((data) => setStudent(data.student));
    });

    // console.log(id)
    // console.log(student)

    return (
        <div>
           student info
        </div>
    )
}

export default StudentsInfoView
