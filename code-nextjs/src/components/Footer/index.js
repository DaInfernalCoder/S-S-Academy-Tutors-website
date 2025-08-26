import About from "./About";
import Links from "./Links";
import Contact from "./Contact";
import Copyright from "./Copyright";

import FooterBg from "../../../public/images/footer-bg.jpg";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Area --> */}
      <footer
        className="footer-area mt-5 pt-5"
        style={{
          backgroundImage: `url(${FooterBg.src})`,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backgroundBlend: 'overlay',
          color: '#fff',
          position: 'relative',
          marginTop: 'auto'
        }}
      >
        <div className="footer-top py-5">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <About />
              <Links />
              <Contact />
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
      {/* <!-- End Footer Area -->	 */}
    </>
  );
}
