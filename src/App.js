
import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  // const [text , setText] = useState('Hi');
  // let handleChange=(e)=>{
  //   setText(e.target.value);
  // }
  return (
    <div className="App">
      {/* <h1>{text}</h1>
      <input onChange={handleChange}/>
      <button onClick={()=>{setText('Hi')}}>Reset</button> */}
      <Form />
    </div>
  );
}

export default App;
