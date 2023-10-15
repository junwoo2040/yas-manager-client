import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
  name: string;
  path: string;
}

const NavigationCard: FC<IProps> = ({ name, path }: IProps) => {
  return (
    <Link to={path}>
      <h3>{name}</h3>
    </Link>
  );
};

export default NavigationCard;
