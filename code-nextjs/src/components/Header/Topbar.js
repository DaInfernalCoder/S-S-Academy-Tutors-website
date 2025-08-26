export default function Topbar() {
  return (
    <>
      {/* <!-- Topbar --> */}
      <div className="topbar">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="topbar-address">
                <ul>
                  <li>
                    <a href="tel:(346)-545-7701">
                      <i className="fa fa-phone"></i>
                      <span>Phone:</span> (346) -545-7701
                    </a>
                  </li>
                  <li>
                    <a href="mailto:snsacademytutors@gmail.com">
                      <i className="fa fa-envelope"></i>
                      <span>Email: </span> snsacademytutors@gmail.com 
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Topbar --> */}
    </>
  );
}
