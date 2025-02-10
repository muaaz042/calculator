import React, { useState } from 'react';

const AdvancedCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }

    if (value === 'C') {
      setInput('');
      setResult('');
      return;
    }

    if (value === '√') {
      try {
        setResult(Math.sqrt(eval(input)).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }

    if (value === '%') {
      try {
        setResult((eval(input) / 100).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }

    if (value === '^') {
      setInput((prevInput) => prevInput + '**');
      return;
    }

    if (value === 'sin') {
      try {
        setResult(Math.sin(eval(input) * (Math.PI / 180)).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }
    
    if (value === 'cos') {
      try {
        setResult(Math.cos(eval(input) * (Math.PI / 180)).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }
    
    if (value === 'tan') {
      try {
        setResult(Math.tan(eval(input) * (Math.PI / 180)).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }

    if (value === 'log') {
      try {
        setResult(Math.log10(eval(input)).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
      return;
    }

    setInput((prevInput) => prevInput + value);
  };

  return (
    <div className="flex justify-center items-center py-12 px-5">
      <div className="bg-white lg:p-8 md:p-6 sm:p-4 p-3 rounded-2xl border-2 border-green-500 shadow-lg shadow-green-300/50 w-full max-w-4xl">
        <div className="mb-6">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-right text-4xl border-2 border-green-500/50 rounded-lg"
          />
          <div className="text-right text-3xl text-gray-600 mt-3">{result}</div>
        </div>
        <div className="grid grid-cols-6 lg:gap-4 md:gap-3 sm:gap-2 gap-1">
          {[
            '7', '8', '9', '/', '√', 'C',
            '4', '5', '6', '*', '%', 'sin',
            '1', '2', '3', '-', '^', 'cos',
            '0', '.', '=', '+', 'tan', 'log'
          ].map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              className={`p-6 text-2xl font-bold ${
                button === '=' ? 'bg-green-500' : 
                button === 'C' ? 'bg-red-500' : 
                ['√', '%', '^', 'sin', 'cos', 'tan', 'log'].includes(button) ? 'bg-green-500' : 'border-2 border-green-500'
              } text-black rounded-lg hover:bg-green-500 transition-colors cursor-pointer flex justify-center items-center`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedCalculator;