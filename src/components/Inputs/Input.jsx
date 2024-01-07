function Input({ inputType, label, className, ...props}) {
  return (
    <>
      {" "}
      <div className="w-full">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 w-full">
      <input
          {...props}
          className={`h-10 block px-2 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 ${className}`}
          type={inputType}
        />
      </div>
        
      </div>
    </>
  );
}

export default Input;
