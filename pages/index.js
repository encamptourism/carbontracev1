import { useEffect } from "react";
import HtmlHead from '../components/common/HtmlHead';
import Header from '../components/common/Header';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

useEffect(() => {
    AOS.init({
        disable: 'mobile'
    });
    AOS.refresh();
  }, []);


  return (
    <>
    <HtmlHead/>
    <Header/>
    <main className="main overflow-hidden">
          <section className="hero__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="hero__main__blk" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <h1>Time to take a step for<br/>
                                a <span>sustainable</span> future</h1>
                            <p>Support Community Led Climate Action To Reduce Impact of Climate Change</p>
                            <div className="hero__btn__blk">
                                <Link  href="/lifestylecalculator"><a>Lifestyle Calculator</a></Link>
                                <Link  href="/travelcalculator"><a>Travel Calculator</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="collaborators__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="collaborator__title__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <h2>Our Collaborators</h2>
                            <p>Lorem ipsum dorem sit amet Lorem ipsum dorem sit amet
                                Lorem ipsum dorem sit amet</p>
                        </div>
                    </div>
                </div>
                <div className="collaborators__main__blk">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="collaborators__single__blk" data-aos="fade-right" data-aos-delay="50"
                                data-aos-duration="1000">
                                <img src="assets/img/home/c1.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="collaborators__single__blk" data-aos="fade-right" data-aos-delay="50"
                                data-aos-duration="1000">
                                <img src="assets/img/home/c2.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="collaborators__single__blk" data-aos="fade-right" data-aos-delay="50"
                                data-aos-duration="1000">
                                <img src="assets/img/home/c3.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="collaborators__single__blk" data-aos="fade-left" data-aos-delay="50"
                                data-aos-duration="1000">
                                <img src="assets/img/home/c4.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="collaborators__single__blk" data-aos="fade-left" data-aos-delay="50"
                                data-aos-duration="1000">
                                <img src="assets/img/home/c5.svg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="collaborators__single__blk" data-aos="fade-left" data-aos-delay="50"
                                data-aos-duration="1000">
                                <img src="assets/img/home/c6.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="usage__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="usage__title collaborator__title__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <h2>Why should I use?</h2>
                            <p>Lorem ipsum dorem sit amet Lorem ipsum dorem sit amet</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="usage__single__blk" data-aos="fade-right" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="usage__img__blk">
                                <img src="assets/img/home/u1.jpg" alt=""/>
                            </div>
                            <div className="usage__content__blk">
                                <h4>Earn Rewards and Cashbacks</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="usage__single__blk" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <div className="usage__img__blk">
                                <img src="assets/img/home/u2.jpg" alt=""/>
                            </div>
                            <div className="usage__content__blk">
                                <h4>Care for Nature</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="usage__single__blk" data-aos="fade-left" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="usage__img__blk">
                                <img src="assets/img/home/u3.jpg" alt=""/>
                            </div>
                            <div className="usage__content__blk">
                                <h4>Lorem Ipsum</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="vision__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="vision__left__blk" data-aos="fade-right" data-aos-delay="50"
                            data-aos-duration="1000">
                            <img src="assets/img/home/vision_img.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="vision__right__blk" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <span>OUR VISION</span>
                            <h2>Enable Hassle Free Climate Action</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco</p>
                            <Link href="#"><a>Explore</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="vision__area mission__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="vision__right__blk mission__left__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <span>OUR MISSION</span>
                            <h2>To Reduce Impact of Climate Change</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco</p>
                            <Link href="#"><a>Explore</a></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 order-first order-md-last order-lg-last">
                        <div className="vision__left__blk" data-aos="fade-left" data-aos-delay="50"
                            data-aos-duration="1000">
                            <img src="assets/img/home/mission_img.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
        <section className="know__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="know__main__blk" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <span>DID YOU KNOW</span>
                            <h2>The average carbon footprint of every person in India was estimated at 0.56 tonne per
                                year</h2>
                            <Link href="#"><a>Let’s calculate mine!</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="media__area">
            <div className="container">
                <div className="media__topbar__wrap" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="media__title">
                                <h2>Media Mentions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="media__single__blk">
                                <Link href="#"><a><img src="assets/img/home/m1.svg" alt=""/></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="media__single__blk">
                                <Link href="#"><a><img src="assets/img/home/m2.svg" alt=""/></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="media__single__blk">
                                <Link href="#"><a><img src="assets/img/home/m3.svg" alt=""/></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="media__single__blk">
                                <Link href="#"><a><img src="assets/img/home/m4.svg" alt=""/></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="media__single__blk">
                                <Link href="#"><a><img src="assets/img/home/m5.svg" alt=""/></a></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="media__single__blk">
                                <Link href="#"><a><img src="assets/img/home/m6.svg" alt=""/></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="media__bottom__wrap" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="media__content">
                                <h4>“Travel Startup from Assam starts <br/>
                                    developing a Travel Footprint Calculator”</h4>
                                <p>Linkedin</p>
                                <Link href="#"><a>Read Article</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="measure__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="measure__main__blk" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <div className="measure__title">
                                <h2>Methodology to Measure</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                            <div className="measure__img__blk">
                                <img src="assets/img/home/measure_img.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="team__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="team__title" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <h2>Meet the team</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="team__single__blk" data-aos="fade-right" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="team__img__blk">
                                <img src="assets/img/home/team1.jpg" alt=""/>
                            </div>
                            <div className="team__content">
                                <h4>Daniel Riley</h4>
                                <p>Owner & Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="team__single__blk" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                            <div className="team__img__blk">
                                <img src="assets/img/home/team2.jpg" alt=""/>
                            </div>
                            <div className="team__content">
                                <h4>Harriet Brock</h4>
                                <p>Lead Product Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="team__single__blk" data-aos="fade-left" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="team__img__blk">
                                <img src="assets/img/home/team3.jpg" alt=""/>
                            </div>
                            <div className="team__content">
                                <h4>Brett Bowen</h4>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="subscribe__area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="subscribe__main__blk" data-aos="fade-up" data-aos-delay="50"
                            data-aos-duration="1000">
                            <div className="subscribe__topbar">
                                <span>Our Subscribe</span>
                                <h2>Subscribe to Newsletter to <br/>
                                    learn more about our upcoming projects</h2>
                            </div>
                            <form action="">
                                <div className="subscribe__form">
                                    <div className="subscribe__input">
                                        <input type="email" placeholder="Your email"/>
                                        <img src="assets/img/home/subscribe_icon.svg" alt=""/>
                                    </div>
                                    <div className="subscribe__btn">
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
    
  )
}
