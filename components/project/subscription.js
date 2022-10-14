const Subscription=()=>{

return (  
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
                                        <img src="../assets/img/home/subscribe_icon.svg" alt=""/>
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
        )


}
export default Subscription;