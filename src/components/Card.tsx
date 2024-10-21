import "./Card.css";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { IconType } from "react-icons";

interface CardProps {
  url_image?: string;
  alt_image?: string;
  icon?: IconType;
  title?: string;
  origin?: string;
  paragraph?: string;
  label_btn?: string;
  route?: string;
  href?: string;
  redirectTo?: string;
  style?: React.CSSProperties; 
}
export const Card = (props: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.redirectTo) {
      navigate(props.redirectTo);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      {props.icon && (
        <div className="card-icon">
          <props.icon/>
        </div>
      )}
      {props.url_image && !props.icon && (
        <img
          src={props.url_image}
          alt={props.alt_image}
          className="card-image"
          style={props.style } 
        />
      )}
      <div className="card-content">
        <h3>{props.title}</h3>
        {props.origin && (
          <p>
            <strong>Origen: </strong>
            {props.origin}
          </p>
        )}
        <p className="card-text">{props.paragraph}</p>
        {props.route && (
          <Button label={props.label_btn} route={props.route} className="primary"/>
        )}
        {props.href && (
          <Button label={props.label_btn} href={props.href}  className="primary"/>
        )}
      </div>
    </div>
  );
};
