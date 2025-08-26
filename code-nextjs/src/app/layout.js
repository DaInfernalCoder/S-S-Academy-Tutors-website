import Script from "next/script";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";
import ColorLayout from "@/components/ColorLayout";
import Preloader from "@/components/Preloader";
import { CalendlyProvider } from "@/context/CalendlyContext";

// Bootstrap CSS
import "../../public/css/bootstrap.min.css";

// Fontawesome CSS
import "../../public/css/font-awesome.min.css";

// Animate CSS
import "animate.css";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Modal Video CSS
import "react-modal-video/css/modal-video.min.css";

// Lighbox Gallery CSS
import "lightbox.js-react/dist/index.css";

// Global CSS
import "./globals.css";

export const metadata = {
  title:
    "S&S Academy Tutors",
  description: "S&S Academy Tutors is a platform that provides tutoring services to students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Preloader />
          <CalendlyProvider>
            <ColorLayout>
              <Header />
              {children}
              <Footer />
              <ScrollTop />
              <Script src="/js/bootstrap.min.js"></Script>
            </ColorLayout>
          </CalendlyProvider>
        </>
      </body>
    </html>
  );
}
