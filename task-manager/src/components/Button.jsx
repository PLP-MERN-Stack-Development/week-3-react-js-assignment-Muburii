function Button({ variant = 'primary', children, onClick, ...props }) {
  const baseStyles = 'px-5 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400 shadow',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 shadow',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-400 shadow',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;