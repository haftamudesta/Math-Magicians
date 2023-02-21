import './calculate.css';

const Calculate = () => {
  return (
    <>
      <table className="container">
        <tr className="inputs">
          <td colSpan="4">0</td>
        </tr>

        <tr>
          <td>
            <button type="submit">AC</button>
          </td>
          <td>
            <button type="submit">+/-</button>
          </td>
          <td>
            <button type="submit">%</button>
          </td>
          <td>
            <button className="operation" type="submit">
              &#247;
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="submit">7</button>
          </td>
          <td>
            <button type="submit">8</button>
          </td>
          <td>
            <button type="submit">9</button>
          </td>
          <td>
            <button className="operation" type="submit">
              &#215;
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button type="submit">4</button>
          </td>
          <td>
            <button type="submit">5</button>
          </td>
          <td>
            <button type="submit">6</button>
          </td>
          <td>
            <button className="operation" type="submit">
              &#8722;
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button type="submit">1</button>
          </td>
          <td>
            <button type="submit">2</button>
          </td>
          <td>
            <button type="submit">3</button>
          </td>
          <td>
            <button className="operation" type="submit">
              &#43;
            </button>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <button className="zero" type="submit">
              0
            </button>
          </td>
          <td>
            <button type="submit">.</button>
          </td>
          <td>
            <button className="operation" type="submit">
              &#61;
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Calculate;
