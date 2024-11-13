import "./Button.css";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  onClick:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | (() => void);
  children: React.ReactNode;
  icon?: React.ReactNode;
  ariaLabel: string;
  disabled?: boolean;
  loading?: boolean;
  outlined?: boolean;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  type,
  variant = "primary",
  size = "medium",
  children,
  onClick,
  ariaLabel,
  disabled,
  loading,
  fullWidth,
  outlined,
  icon,
}) => {
  return (
    <button
      data-loading={loading ? "true" : "false"}
      type={type}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`btn  btn--${size} ${fullWidth ? "btn--full-width" : ""} ${
        outlined ? `btn--${variant}-outlined` : `btn--${variant}`
      }`}
    >
      {icon ? (
        <>
          <span
            className="btn__icon"
            style={
              loading ? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            {icon}
          </span>
          <span
            aria-hidden="true"
            style={loading ? { display: "inline-block" } : { display: "none" }}
            className={`btn__loader ${
              outlined
                ? `btn__loader--${variant}-outlined`
                : `btn__loader--${variant}`
            }`}
          ></span>
          <span
            style={
              loading ? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            {children}
          </span>
        </>
      ) : (
        <>
          <span
            aria-hidden="true"
            style={loading ? { display: "inline-block" } : { display: "none" }}
            className={`btn__loader ${
              outlined
                ? `btn__loader--${variant}-outlined`
                : `btn__loader--${variant}`
            }`}
          ></span>
          <span
            style={
              loading ? { visibility: "hidden" } : { visibility: "visible" }
            }
          >
            {children}
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
