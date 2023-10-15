import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  path: string;
  color: string;
  Icon?: IconType;
}

const SidebarEntry = ({ title, path, color, Icon }: Props) => {
  return (
    <li className="flex items-center p-2" style={{ backgroundColor: color }}>
      {Icon ? (
        <Icon className="mr-2 h-6 w-6" />
      ) : (
        <div className="mr-2 h-6 w-6"></div>
      )}
      <Link to={path}>{title}</Link>
    </li>
  );
};

export default SidebarEntry;
