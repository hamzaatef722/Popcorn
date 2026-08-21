function Button({ children, variant = "neon", className = "", ...props }) {
  const base = variant === "neon" ? "btn-neon" : "btn-ghost";
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
