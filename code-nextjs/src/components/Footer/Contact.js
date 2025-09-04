import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-widget">
          <h3 className="widget-title">Contact</h3>
          {/* <!-- Footer Contact --> */}
          <div className="footer-contact">
            <ul className="contact-bottom">
              <li>
                <Link href="tel:(346)-545-7701">
                  <i className="fa fa-phone"></i>(346) -545-7701
                </Link>
              </li>
              <li>
                <Link href="mailto:snsacademytutors@gmail.com">
                  <i className="fa fa-envelope"></i>snsacademytutors@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
