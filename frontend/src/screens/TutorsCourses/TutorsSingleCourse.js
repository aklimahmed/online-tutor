import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const TutorsSingleCourse = () => {
    const { id } = useParams();

    const [singleCourse, setSingleCourse] = useState({})

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/course/tutor/singlecourse/${id}`)
        .then((data) => setSingleCourse(data.data.course));
    },[id]);

    //console.log(singleCourse)

    return (
        <div>
            tutors single course {id}
        </div>
    )
}

export default TutorsSingleCourse
