import React from 'react';

const IconF = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 3h14M5 12h10M5 3v18" />
    </svg>
  );
};

export default IconF;