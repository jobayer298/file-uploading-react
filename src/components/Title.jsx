import React from 'react';

const Title = ({text, color}) => {
    return (
      <div className="flex gap-2 items-center">
        <p className={`h-9 w-9 ${color} rounded-l-2xl`}></p>
        <h2 className="font-medium text-2xl">{text}</h2>
      </div>
    );
};

export default Title;