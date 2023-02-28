import React, { useState } from 'react';

const Calculator = () => {
  const [data, setData] = useState('');
  const setItem = (e) => {
    setData(data + e.target.value);
  };

  const setOperation = (event) => {
    const inputValue = data;
    if (inputValue !== '' && inputValue.length > 0) {
      const lastIndexChar = inputValue.charAt(inputValue.length - 1);
      if (
        lastIndexChar !== event.target.value &&
        lastIndexChar.match(/^[0-9]/)
      ) {
        setItem(event);
      }
    }
  };

  const CalculatValue = () => {
    let inputValue = data;

    if (inputValue !== '' && inputValue.length > 0) {
      const lastIndexChar = inputValue.charAt(inputValue.length - 1);
      if (!lastIndexChar.match(/^[0-9]/)) {
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }
      const finalValue = eval(inputValue);
      setData(finalValue);
    }
  };
  const restData = () => {
    setData('');
  };

  return (
    <>
      <p>lets do some math!</p>
      <table className="container">
        <tr className="inputs">
          <td colSpan="4">{data}</td>
        </tr>

        <tr>
          <td>
            <button type="submit" onClick={restData}>
              AC
            </button>
          </td>
          <td>
            <button type="submit" value="+/-" onClick={setOperation}>
              +/-
            </button>
          </td>
          <td>
            <button type="submit" value="%" onClick={setOperation}>
              %
            </button>
          </td>
          <td>
            <button
              className="operation"
              type="submit"
              value="/"
              onClick={setOperation}
            >
              &#247;
            </button>
          </td>
        </tr>
        <tbody>
          <td>
            <button type="submit" value={7} onClick={setItem}>
              7
            </button>
          </td>
          <td>
            <button type="submit" value={8} onClick={setItem}>
              8
            </button>
          </td>
          <td>
            <button type="submit" value={9} onClick={setItem}>
              9
            </button>
          </td>
          <td>
            <button
              className="operation"
              type="submit"
              value="*"
              onClick={setOperation}
            >
              &#215;
            </button>
          </td>
        </tbody>

        <tr>
          <td>
            <button type="submit" value={4} onClick={setItem}>
              4
            </button>
          </td>
          <td>
            <button type="submit" value={5} onClick={setItem}>
              5
            </button>
          </td>
          <td>
            <button type="submit" value={6} onClick={setItem}>
              6
            </button>
          </td>
          <td>
            <button
              className="operation"
              type="submit"
              value="-"
              onClick={setOperation}
            >
              &#8722;
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button type="submit" value={1} onClick={setItem}>
              1
            </button>
          </td>
          <td>
            <button type="submit" value={2} onClick={setItem}>
              2
            </button>
          </td>
          <td>
            <button type="submit" value={3} onClick={setItem}>
              3
            </button>
          </td>
          <td>
            <button
              className="operation"
              type="submit"
              value="+"
              onClick={setOperation}
            >
              &#43;
            </button>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <button className="zero" type="submit" value={0} onClick={setItem}>
              0
            </button>
          </td>
          <td>
            <button type="submit" value="." onClick={setItem}>
              .
            </button>
          </td>
          <td>
            <button className="operation" type="submit" onClick={CalculatValue}>
              &#61;
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Calculator;
