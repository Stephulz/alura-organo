import "./Button.css";

function Button({ children, onClick }) {
  return (
    <button
      data-testid={`button-${children}`}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
