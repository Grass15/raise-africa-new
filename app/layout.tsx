import "../styles/globals.css";

import { ThirdwebProvider } from "./components/ThirdwebProvider";

import { MainNavbar } from "./components/MainNavbar";
import Footer from "./components/Footer";
import { StateContextProvider } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black" className={"text-white"}>
      <body>
        <ThirdwebProvider>
          <StateContextProvider>
            <ToastContainer />
            <MainNavbar />
            {children}
            <Footer />
          </StateContextProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
