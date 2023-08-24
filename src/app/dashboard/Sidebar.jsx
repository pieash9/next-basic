import NavLink from "@/components/NavLink";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/addProduct",
    title: "Add Product",
  },
  {
    path: "/dashboard/manageProduct",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul>
        {navLinks.map(({ title, path }) => (
          <li className="my-2" key={title}>
            <NavLink exact activeClassName="text-blue-400" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
