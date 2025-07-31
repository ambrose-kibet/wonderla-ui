import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Root: React.FC = () => {
  return (
    <div className="bg-blue-950 flex flex-col min-h-screen min-w-screen overflow-hidden">
      <Navbar />
      <Sidebar />
      <div className="flex flex-col items-center justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
