import "../styles/Button.css";

export default function Button({ children, onClick, size = "md" }) {
  return (
    <button className={`button btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
