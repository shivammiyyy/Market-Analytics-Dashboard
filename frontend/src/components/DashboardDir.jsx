import React from "react";
import { NavLink } from "react-router-dom";

const activeLinkClasses = "bg-gray-900 text-white px-3 py-1 rounded";
const inactiveLinkClasses = "text-gray-800 hover:bg-gray-200 px-3 py-1 rounded";

export const DashboardDir = () => {
  return (
    <NavLink
      to="/dashboard/all"
      className={({ isActive }) =>
        isActive ? activeLinkClasses : inactiveLinkClasses
      }
    >
      Dashboard
    </NavLink>
  );
};
