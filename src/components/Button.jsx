const Button = ({
  bgColor,
  size,
  text,
  color,
  borderRadius,
  icon,
  customFunc,
}) => {
  return (
    <button
      type="button"
      style={{ borderRadius, color, backgroundColor: bgColor }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={customFunc}
    >
      {text}
      {icon}
    </button>
  );
};
export default Button;
