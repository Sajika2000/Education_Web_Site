import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button
        className='  border-2 px-6 py-1 border-white bg-[#5f5fe3] hover:text-[#c6c5f5] transition rounded  font-medium'
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
