// components/ColoredLights.js
import React from 'react';

const ColoredLights = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`absolute rounded-full blur-xl opacity-70 animate-pulse ${
            index % 3 === 0
              ? 'bg-red-500 w-48 h-48 top-10 left-10'
              : index % 3 === 1
              ? 'bg-green-500 w-64 h-64 top-20 -left-12'
              : 'bg-blue-500 w-56 h-56 top-40 left-60'
          }`}
        />
      ))}
    </div>
  );
};

export default ColoredLights;
