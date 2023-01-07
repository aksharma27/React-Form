import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';



function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (inputValues) => {
    setName(inputValues.name);
    setNumber(inputValues.number);
    setDate1(inputValues.date1);
    setDate2(inputValues.date2);
    setCvc(inputValues.cvc);
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <Card name={name} number={number} date1={date1} date2={date2} cvc={cvc} />
    </div>

  )
}

export default App
