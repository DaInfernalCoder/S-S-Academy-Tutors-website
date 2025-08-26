export default function About() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        {/* <!-- Single Widget --> */}
        <div className="single-widget footer-about">
          <div className="footer-brand-section mb-4">
            <h3 className="widget-title mb-3" style={{color: '#fff', fontSize: '24px', fontWeight: '600'}}>
              S&S Academy Tutors
            </h3>
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
