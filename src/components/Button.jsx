const Button = ({ children, primary = true, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded font-medium transition-all duration-300 ${
        primary
          ? 'bg-primary text-white hover:bg-primary/90'
          : 'bg-white text-primary border border-primary hover:bg-gray-50'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
