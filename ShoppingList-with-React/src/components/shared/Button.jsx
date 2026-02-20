function Button({ children, version, type }) {
  return (
    <button type={type} className={` btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
