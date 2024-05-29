

const Header = (props) =>{
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercise1}
      </p>
      <p>
        {props.part2} {props.exercise2}
      </p>
      <p>
        {props.part3} {props.exercise3}
      </p>
    </>
  );
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
}

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const part1 = "Fundamentos da biblioteca React";
  const exercises1 = 10;
  const part2 = "Usando props para passar dados";
  const exercises2 = 7;
  const part3 = "Estado de um componente";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercises1}
              part2={part2} exercise2={exercises2}
              part3={part3} exercise3={exercises3}
      />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  );
}

// const App = () => {
//   const course = "Desenvolvimento de aplicação Half Stack";
//   const part1 = "Fundamentos da biblioteca React";
//   const exercises1 = 10;
//   const part2 = "Usando props para passar dados";
//   const exercises2 = 7;
//   const part3 = "Estado de um componente";
//   const exercises3 = 14;

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   );
// };


export default App;
