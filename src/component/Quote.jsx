import React from 'react';
import classes from './Quote.module.css';

const Quote = () => {
  return (
    <div>
      <p className={classes.quote}>
        Mathematics is notnumbers,equations,computations,or algorithms:it is
        about understanding.-William Paul thurston
      </p>
    </div>
  );
};

export default Quote;
