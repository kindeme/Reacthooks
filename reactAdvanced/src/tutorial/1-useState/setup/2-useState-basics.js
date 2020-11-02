import React, { useState } from 'react';
//useState function

const UseStateBasics = () => {
  const [text,setText] = userState('random ttle');
const handleClick = () => {
  if(text === 'random title'){
    setText('hello world');
  }else{
    setText('random title');
  };
};
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" conClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
