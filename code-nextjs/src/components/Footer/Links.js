import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-2 col-md-6 col-12">
        {/* <!-- Quick Links --> */}
        <div className="single-widget f-links">
          <h3 className="widget-title">Quick Links</h3>
          <ul>
            <li>
              <Link href="/why-us">
                <i className="fa fa-angle-double-right"></i>Why Us
              </Link>
            </li>

            <li>
              <Link href="/process">
                <i className="fa fa-angle-double-right"></i>Our Process
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <i className="fa fa-angle-double-right"></i>Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
