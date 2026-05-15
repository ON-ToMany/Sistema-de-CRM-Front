import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-w-0 min-h-screen p-2 md:p-8">
        <Outlet /> 
      </main>
    </div>
  );
}