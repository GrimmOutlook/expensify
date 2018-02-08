import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    404 - You done messed up!
    <Link to='/'>Home Page</Link>
  </div>
);

export default NoMatch;
