const Input = ({ type, placeholder, id, ...props }) => {
  return <input type={type} placeholder={placeholder} id={id} {...props} />;
};

export default Input;
