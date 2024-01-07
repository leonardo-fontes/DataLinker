function Button({ onHandleClick, type, classname, text }) {
  return (
    <button onClick={onHandleClick} type={type} className={classname}>
      {text}
    </button>
  );
}

export default Button;
