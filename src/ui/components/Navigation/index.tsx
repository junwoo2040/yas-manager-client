import { FC } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useBreadcrumb } from "@hooks/components";

const Navigation: FC = () => {
  // Get navigate function to control navigation
  const navigate = useNavigate();

  // Retrieve breadcrumb array with current pathname
  const location = useLocation();
  const breadcrumb = useBreadcrumb(location.pathname);

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <LuChevronLeft className="mr-2 h-6 w-6" />
      </button>
      <button onClick={() => navigate(1)}>
        <LuChevronRight className="mr-2 h-6 w-6" />
      </button>
      <div className="inline">
        {
          // Map each breadcrumb
          breadcrumb.map((c) => (
            <span key={c.path}>
              /<Link to={c.path}>{c.name}</Link>
            </span>
          ))
        }
      </div>
    </div>
  );
};

export default Navigation;
