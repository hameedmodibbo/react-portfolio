const Button = function ({ children, ...props}) {

   return <button {...props}>{children}</button>;
};

export default Button;

