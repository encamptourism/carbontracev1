import Router from 'next/router'
import Image from "next/image";
import Link from 'next/link';

const Header=()=>{

return (
<>
    <div className="offcanvas-area">
        <div className="menu-close">
            <i className="far fa-times"></i>
        </div>
        <div className="offcanvas-menu">
            <div className="main-menu">
                <ul className="d-block">
                    <li><Link href ="/"><a>Home</a></Link></li>
                    <li><Link href ="#"><a>Projects</a></Link></li>
                    <li><Link href ="#"><a className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                            >Calculators<i className="fas fa-chevron-down"></i></a></Link>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <ul className="mobile__drop">
                                <li><Link href ="/lifestylecalculator"><a>Lifestyle Calculator</a></Link></li>
                                <li><Link href ="/travelcalculator"><a>Travel Calculator</a></Link></li>

                            </ul>
                        </div>
                    </li>
                    <li><Link href ="#"><a>FAQ</a></Link></li>
                    <li><Link href ="#"><a>Live Feed</a></Link></li>
                </ul>
                <div className="offcanvas-btn text-center">
                    <Link href ="#"><a>Login / Sign Up</a></Link>
                </div>
            </div>
        </div>
    </div>

    <div className="offcanvas-overlay"></div>

    <div className="header__area">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-6">
                    <div className="header__logo">
                        <Link href ="#"><a><img src="assets/img/home/logo.svg" alt=""/></a></Link>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-6">
                    <div className="mobile__menu d-flex d-md-none d-lg-none">
                        <div className="menu-open">
                            <span><i className="fas fa-bars"></i></span>
                        </div>
                    </div>
                    <div className="header__menu d-none d-md-flex d-lg-flex">
                        <ul>
                            <li><Link href ="#"><a>Home</a></Link></li>
                            <li><Link href ="#"><a>Projects</a></Link></li>
                            <li><Link href ="#"><a>Calculators<i className="fas fa-chevron-down"></i></a></Link>
                                <ul className="header__dropdown">
                                <li><Link href ="/lifestylecalculator"><a>Lifestyle Calculator</a></Link></li>
                                <li><Link href ="/travelcalculator"><a>Travel Calculator</a></Link></li>
                                </ul>
                            </li>
                            <li><Link href ="#"><a>FAQ</a></Link></li>
                            <li><Link href ="#"><a>Live Feed</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 d-none d-md-block d-lg-block">
                    <div className="header__btn">
                        <Link href ="#"><a>Login / Sign Up</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
	   );

}
export default Header;