const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    <p>{props.parts[0].name} - {props.parts[0].exercises}</p>
    <p>{props.parts[1].name} - {props.parts[1].exercises}</p>
    <p>{props.parts[2].name} - {props.parts[2].exercises}</p>
    </div>
  )
}
const Total = (props) => {
  let i = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <p>Total: {i} exercises</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

/* const Hello = (props) => {
  console.log(props);
  return (
    <p>Hello {props.name}, you are {props.age}</p>
  )
}

const App = () => {
  const now = new Date()
  let a = Math.floor(Math.random()*10)+1;
  let b = Math.floor(Math.random()*10)+1;
  const nimi = "Alex";
  const ika = "44";
  //console.log(now, ´Yhteenlasku on ${a+b}´);

  return (
    <div>
      <h2>Ensin "Hello World" ja aika</h2>
      <p>Hello world, it is {now.toString()}</p>
      <h2>Sitten kahden muuttujan yhteenlasku</h2>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <h2>Sitten kahden muuttujan yhteenlasku</h2>
      <Hello name={nimi} age={ika}/>
    </div>
  )
};  */

export default App;
