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
      <div className="bg-white p-8 rounded-2xl border-2 border-green-300 shadow-lg w-full max-w-5xl">
        <div className="mb-6">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-right text-3xl border-2 border-green-300/50 rounded-lg"
          />
          <div className="text-right text-3xl text-gray-600 mt-3">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              className={`p-6 text-2xl font-bold ${
                button === '=' ? 'bg-green-300' : ' border-2 border-black'
              } text-black rounded-xl cursor-pointer hover:bg-green-300 transition-colors flex justify-center items-center`}
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