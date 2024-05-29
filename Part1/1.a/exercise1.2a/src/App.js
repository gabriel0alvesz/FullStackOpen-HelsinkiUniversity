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
        {part.text} {part.exercise}
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
        {Parts[0].exercise + Parts[1].exercise + Parts[2].exercise}
      </p>
    </>
  );
};

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const Parts = [
    { text: "Fundamentos da biblioteca React", exercise: 10 },
    { text: "Usando props para passar dados", exercise: 7 },
    { text: "Estado de um componente", exercise: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content Parts={Parts} />
      <Total Parts={Parts} />
    </div>
  );
};

export default App;
