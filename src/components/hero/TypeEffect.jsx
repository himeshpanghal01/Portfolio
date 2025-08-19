
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeEffect = () => (
  <span className="font-semibold text-teal-800">
    <Typewriter
      options={{
        strings: ['Coder', 'Software Developer'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}
    />
  </span>
);

export default TypeEffect;
