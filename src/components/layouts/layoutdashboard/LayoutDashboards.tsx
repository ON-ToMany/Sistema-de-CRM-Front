import Sidebar from "../../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen p-8">
        <Outlet /> 
      </main>
    </div>
  );
}