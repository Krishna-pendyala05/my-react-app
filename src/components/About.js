import React from 'react';
import _ from 'lodash';

const About = () => {
  // Using lodash to capitalize each word
  const title = _.startCase('about this application');
  
  return (
    <div className="container">
      <h1 className="page-title">{title}</h1>
      <p>This is a minimal React application built with:</p>
      <ul>
        <li>React 17.0.0</li>
        <li>React Router 5.2.0</li>
        <li>Lodash 4.17.0</li>
      </ul>
    </div>
  );
};

export default About;