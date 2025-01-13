import React from 'react';
import { Link } from 'react-router-dom';

const ScrollLink = ({ to, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
