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
                                <li><Link href ="#"><a>About</a></Link></li>
                                <li><Link href ="#"><a>Privacy Policy</a></Link></li>
                                <li><Link href ="#"><a>Terms & Conditions</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer__logo">
                            <Link href ="/"><a><img src="assets/img/home/logo.svg" alt=""/></a></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4">
                        <div className="footer__socials">
                            <ul>
                                <li>Contact Us</li>
                                <li><Link href ="/"><a><img src="assets/img/home/twitter.svg" alt=""/></a></Link></li>
                                <li><Link href ="/"><a><img src="assets/img/home/facebook.svg" alt=""/></a></Link></li>
                                <li><Link href ="/"><a><img src="assets/img/home/instagram.svg" alt=""/></a></Link></li>
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
	   )

}
export default MainFooter;