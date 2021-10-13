import { React, useState, useEffect } from "react";
import "./LessonInclude.scss";

const LessonInclude = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.lessonInclude);
  }, [props]);

  return (
    <div className="mt-5">
      <h5 className="qtext">Lesson Include</h5>
      {data ? (
        <ul className="list_items">
          {data.curriculum === true ? <li>Curriculum</li> : ""}
          {data.proficiency === true ? <li>Proficiency</li> : ""}
          {data.homework === true ? <li>Homework</li> : ""}
          {data.quizzes === true ? <li>Quizzes</li> : ""}
          {data.learningMaterial === true ? <li>LearningMaterial</li> : ""}
          {data.readingExercise === true ? <li>ReadingExercise</li> : ""}
          {data.writtingExercise === true ? <li>WrittingExercise</li> : ""}
          {data.lessonPlans === true ? <li>LessonPlans</li> : ""}
        </ul>
      ) : (
        <ul></ul>
      )}
    </div>
  );
};

export default LessonInclude;
