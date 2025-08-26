import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/footer-logo.png";

export default function About() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        {/* <!-- Single Widget --> */}
        <div className="single-widget footer-about">
          <div className="footer-logo">
            <Link className="logo" href="/">
              <Image 
                src={Logo} 
                alt="S&S Academy Tutors Logo" 
                width={200} 
                height={100} 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto' 
                }} 
                priority
              />
            </Link>
          </div>
          <div className="about-description">
            <p>
              S&S Academy Tutors is your trusted partner in academic success. We provide personalized 
              tutoring services to help students excel in their studies and achieve their educational goals.
            </p>
          </div>
          {/* <!-- Quick Link Box -->	 */}
          <div className="f-contact-box">
            <div className="box-icon">
              <i className="fa fa-headphones"></i>
            </div>
            <div className="contact-text">
              <p>Talk To Our Support</p>
              <h5>(346) -545-7701</h5>
            </div>
          </div>
        </div>
        {/* <!-- End Single Widget --> */}
      </div>
    </>
  );
}
