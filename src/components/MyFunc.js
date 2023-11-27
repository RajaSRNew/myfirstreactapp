import React, { useState } from 'react';


  function MyFunc(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div><br/><br/><br/><br/><br/><br/>
        {props.para2}
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  export default MyFunc;