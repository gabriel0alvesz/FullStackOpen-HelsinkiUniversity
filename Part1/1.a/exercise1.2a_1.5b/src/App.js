import React from "react";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ Parts }) => {
  return (
    <div>
      <Part part={Parts[0]} />
      <Part part={Parts[1]} />
      <Part part={Parts[2]} />
    </div>
  );
};

const Total = ({ Parts }) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {Parts[0].exercises + Parts[1].exercises + Parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };


  return (
    <div>
      <Header course={course.name} />
      <Content Parts={course.parts} />
      <Total Parts={course.parts} />
    </div>
  );
};

export default App;
