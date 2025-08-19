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
    
       <h1>{course}</h1>
      <p>
        {parts[0].name} - {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} - {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} - {parts[2].exercises}
      </p>
      <p>Number of exercises - {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p> 
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
