import React from 'react';
import Counter from './Counter';
import Form from './Form';
import Greetings from './Greeting';
import Reducer from './Reducer';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSumbit = (form: {name : string, description : string})=>{
    console.log(form)
  }
  return <div>
    <Greetings name="Hello" onClick={onClick} />
    <Counter/>
    <Form onSubmit={onSumbit} />
    <Reducer/>
  </div>;
};

export default App;