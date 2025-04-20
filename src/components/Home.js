import React from 'react';
import _ from 'lodash';

const Home = () => {
  // Using lodash to create an array of numbers
  const numbers = _.range(1, 6);
  
  return (
    <div className="container">
      <h1 className="page-title">Home Page</h1>
      <p>Welcome to our minimal React application!</p>
      
      <h2>Example using Lodash</h2>
      <p>Here are some numbers generated using Lodash's range function:</p>
      <ul>
        {numbers.map(num => (
          <li key={num}>Number {num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;