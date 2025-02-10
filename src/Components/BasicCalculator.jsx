import React, { useState } from 'react';

const BasicCalculator = () => {
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

    setInput((prevInput) => prevInput + value);
  };

  return (
    <div className="flex justify-center items-center py-10 pt-12 px-5">
      <div className="bg-white lg:p-8 md:p-6 sm:p-4 p-3 rounded-2xl border-2 border-green-500 shadow-lg shadow-green-300/50 w-full max-w-5xl">
        <div className="mb-6">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-right text-3xl border-2 border-green-500/50 rounded-lg"
          />
          <div className="text-right text-3xl text-gray-600 mt-3">{result}</div>
        </div>
        <div className="grid grid-cols-4 lg:gap-4 md:gap-3 sm:gap-2 gap-1.5">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              className={`p-6 text-2xl font-bold ${
                button === 'C' ? 'bg-red-500' : 
                button === '=' ? 'bg-green-500' : 'border-2 border-green-500'
              } text-black rounded-xl cursor-pointer hover:bg-green-500 transition-colors flex justify-center items-center`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;