import { useState } from 'react'

import './App.css'

function App(){
  const [result ,setResult] = useState('')

  
    const displayContent = (value) => {
      
      if (value === '=') {
        try {
          
          setResult(eval(result).toString());
        } catch (error) {
          setResult('Error');
        }
      } else {
        
        setResult((prevResult) => prevResult + value);
      }
    };
    const allClear = () =>{
      setResult(' ');
    };

    const clear = () => {
      setResult((prevResult) => prevResult.slice(0, -1)); 
    };

  return (
    <>
     <div className="calculator">
        <input type="text" id="result" placeholder='0' value={result} readOnly />

        <div className='allButton'>
          <button onClick={allClear} className='num' id='ac'>AC</button>
          <button onClick={clear} className='num' id='del'>DEL</button>
          <button onClick={() => displayContent('/')} className='oper' id='div'>/</button>
        </div>
        <div className='allButton'>
          <button onClick={() => displayContent('7')} className='num' id='num7'>7</button>
          <button onClick={() => displayContent('8')} className='num' id='num8'>8</button>
          <button onClick={() => displayContent('9')} className='num' id='num9'>9</button>
          <button onClick={() => displayContent('*')} className='num' id='mul'>x</button>
        </div>
        <div className='allButton'>
          <button onClick={() => displayContent('4')} className='num' id='num4'>4</button>
          <button onClick={() => displayContent('5')} className='num' id='num5'>5</button>
          <button onClick={() => displayContent('6')} className='num' id='num6'>6</button>
          <button onClick={() => displayContent('+')} className='oper' id='add'>+</button>
        </div>
        <div className='allButton'>
          <button onClick={() => displayContent('1')} className='num' id='num1'>1</button>
          <button onClick={() => displayContent('2')} className='num' id='num2'>2</button>
          <button onClick={() => displayContent('3')} className='num' id='num3'>3</button>
          <button onClick={() => displayContent('-')} className='oper' id='sub'>-</button>
        </div>
        <div className='allButton'>
          <button onClick={() => displayContent('0')} className='num' id='num0'>0</button>
          <button onClick={() => displayContent('.')} className='num' id='point'>.</button>
          <button onClick={() => displayContent('=')} className='oper' id='equal'>=</button>
        </div>
      </div>    
    </>
  )
}

export default App
