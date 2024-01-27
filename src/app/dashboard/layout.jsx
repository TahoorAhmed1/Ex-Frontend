/** @format */

import Sidebar from "@/components/dashboard/Sidebar";
import "../globals.css";
import DashboradNav from "@/components/dashboard/DashboradNav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StateContext } from "../../context/userContext";
export const metadata = {
  title: "Dashboard",
  description: "Expedition Orange | Dashboard",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex overflow-x-hidden">
        <StateContext>
          <Sidebar />
          <main className="flex-1 relative md:ml-0 ml-14 min-h-screen">
            <DashboradNav />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* <Tabs /> */}
            <div className="absolute max-w-[400px] max-h-[300px] bottom-0 right-0 bg-cover bg-no-repeat bg-center bg_profile_design2"></div>
            <div className="">{children}</div>
          </main>
        </StateContext>
      </body>
    </html>
  );
}
