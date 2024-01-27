import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { StateContext } from "../../context/userContext";
const poppins = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Expedition Orange",
  description: "Expedition Orange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StateContext>
          <Header />
          <Navbar />
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
          {children}
          <Footer />
        </StateContext>
      </body>
    </html>
  );
}
