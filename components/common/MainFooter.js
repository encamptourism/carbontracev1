import Link from "next/link";
const MainFooter=()=>{

return (
    <>
        <div className="footer__area">
      <div className="container">
          <div className="footer__topbar__wrap">
              <div className="row">
                  <div className="col-lg-5 col-md-6">
                      <div className="footer__menu">
                          <ul>
                              <li><Link href ="#">About</Link></li>
                              <li><Link href ="#">Privacy Policy</Link></li>
                              <li><Link href ="#">Terms & Conditions</Link></li>
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-2 col-md-2">
                      <div className="footer__logo">
                          <Link href ="/"><img src="../assets/img/home/logo.svg" alt=""/></Link>
                      </div>
                  </div>
                  <div className="col-lg-5 col-md-4">
                      <div className="footer__socials">
                          <ul>
                              <li>Contact Us</li>
                              <li><Link href ="/"><img src="../assets/img/home/twitter.svg" alt=""/></Link></li>
                              <li><Link href ="/"><img src="../assets/img/home/facebook.svg" alt=""/></Link></li>
                              <li><Link href ="/"><img src="../assets/img/home/instagram.svg" alt=""/></Link></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer__bottombar__wrap">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="footer__copyright">
                          <span>© 2022 company name. All rights reserved.</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </>
);

}
export default MainFooter;