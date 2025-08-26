import Image from "next/image";
import Link from "next/link";

import AboutImg from "../../../../public/images/about-img.png";

export default function About() {
  return (
    <>
      {/* <!-- About Area --> */}
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInLeft"
              data-wow-duration="1s"
            >
              {/* <!-- About image --> */}
              <div className="about-img" style={{ position: "relative", overflow: "hidden", maxWidth: "500px", margin: "0 auto" }}>
                <Image 

                  src={AboutImg} 
                  alt="About S&S Academy Tutors" 
                  width={500} 
                  height={500} 
                  style={{ 
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px"
                  }} 
                  priority
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 wow animate__fadeInRight"
              data-wow-duration="1.1s"
            >
              {/* <!-- About content --> */}
              <div className="about-content">
                <span>About S&S Academy Tutors</span>
                <h2>
                  Your Trusted Partner in Academic Success
                </h2>
                <p>
                  At S&S Academy Tutors, we specialize in connecting students with personalized 
                  learning experiences, providing expert guidance throughout their educational journey. 
                  Our professional team ensures a comprehensive approach to help students 
                  excel in their studies and achieve their academic goals.
                </p>
                <div className="feature">
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <i className="fa fa-child"></i>
                    <div className="feature-content">
                      <h3>Personalized Tutoring</h3>
                      <p>
                        Customized learning programs tailored to each student&apos;s 
                        unique needs, learning style, and academic goals
                      </p>
                    </div>
                  </div>
                  {/* <!-- Single Feature --> */}
                  <div className="single-feature">
                    <i className="fa fa-university"></i>
                    <div className="feature-content">
                      <h3>Comprehensive Academic Support</h3>
                      <p>
                        Full range of educational services from elementary to college prep, 
                        including test preparation, course planning, and college counseling
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-theme-btn">
                  <Link href="/why-us" className="theme-btn">
                    More about us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Area -->	 */}
    </>
  );
}
