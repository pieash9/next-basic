import React from "react";
import Sidebar from "./Sidebar";
export const metadata = {
  title: "Hero Pieash | Dashboard",
  description: "Me hero",
};
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex container mx-auto">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
