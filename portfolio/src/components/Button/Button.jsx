import "./Button.css";

function Button({ text, icon }) {
  return (
    <div className="btn">
      <span className="p-1">{text}</span>
      {icon && <span>{icon}</span>}
    </div>
  );
}

export default Button;
