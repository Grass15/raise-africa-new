import "../styles/globals.css";

import { ThirdwebProvider } from "./components/ThirdwebProvider";

import { MainNavbar } from "./components/MainNavbar";
import Footer from "./components/Footer";
import { StateContextProvider } from "./context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { TawkMessengerReact } from "./components/Tawk";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="black" className={"text-white"}>
      <body>
        <Script
          id="tawkto-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/675f409caf5bfec1dbdc3089/1if618q66";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
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
