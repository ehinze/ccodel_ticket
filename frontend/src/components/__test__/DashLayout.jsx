import React, { useState } from "react";
import Navbar from "./Navbar";
import AdminDashboard from "./AdminDashboard";
import ContentNavbar from "./ContentNavbar";

const DashLayout = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  return (
    <div className="flex overflow-x-hidden min-h-[100vh]">
   

      {/* Sidebar/Navbar */}
      <Navbar isOpen={isNavbarOpen} toggleNavbar={() => setIsNavbarOpen(!isNavbarOpen)} />

      <div className={`flex-1 transition-all duration-300 ${isNavbarOpen ? "lg:ml-64 md:ml-16 sm:ml-16" : "ml-16"}`}>
        <ContentNavbar />
        <AdminDashboard />
      </div>
    </div>
  );
};

export default DashLayout;
