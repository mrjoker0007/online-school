import React from "react";
import "./Course.css";

const Course = (props) => {
  const course = props.course;
  return (
    <div className="single-course m-2">
      <img className="w-100" src={course.image} alt="" />
      <h4>{course.name}</h4>
      <p>
        <small>by {course.author}</small>
      </p>
      <p>{course.duration} on demand video</p>
      <h4>${course.price}</h4>
      <button
        id={course.id}
        onClick={() => {
          props.handleEnrollNow(course);
        }}
        className="btn"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default Course;
