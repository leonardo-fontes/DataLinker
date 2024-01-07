import React from "react";

function Select({ label, options, className, ...props }) {
  return (
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 w-full">
        <select 
          {...props}
          className={`h-10 block w-full p-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ${className}`}
        >
          {options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
