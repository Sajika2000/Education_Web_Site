import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        className='border-2 px-6 py-1 border-white bg-[#8c14e4] hover:text-[#d1a8f0] transition rounded-xl'
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
