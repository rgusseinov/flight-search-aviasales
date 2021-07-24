import React from 'react';
import classes from './loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={classes.content}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
