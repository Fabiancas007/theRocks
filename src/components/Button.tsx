import "./Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  label: string | undefined;
  route?: string;
  href?: string;
  onClick?: (e: React.FormEvent) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const navigate = useNavigate();  // Hook para navegar entre rutas

  const handleClick = (e: React.FormEvent) => {
    if (props.route) {
      navigate(props.route);
    } else if (props.onClick) {
      props.onClick(e);
    }
  };

  if (props.href) {
    return (
      <a className={ props.className }
        href={props.href}
        target='_blank'
        rel="noopener noreferrer"
        style={{ ...props.style }}
      >
        {props.icon && <span className="btn-icon">{props.icon}</span>}
        {props.label}
      </a>
    );
  }
  return (
    <button className={`my-btn ${props.className || ''}`}
      onClick={handleClick}
      style={{ ...props.style }}
      disabled={props.disabled}
    >
      {props.icon && <span className="btn-icon">{props.icon}</span>}
      {props.label}
    </button>
  );
};
