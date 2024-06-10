export default function HeroArea() {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <img src="images/slider-bg.jpg" alt="" />
      </div>
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>Blue Bucket</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=""> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    {" "}
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="testimonial.html">
                    Testimonial
                  </a>
                </li>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="slider_section ">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="container">
            <div className="carousel_btn_box">
              <a
                className="carousel-control-prev"
                href="#customCarousel1"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#customCarousel1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail-box">
                      <h1>We Provide Laundry Services</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eum magnam, voluptates distinctio, officia
                        architecto tenetur debitis hic aspernatur libero commodi
                        atque fugit adipisci, blanditiis quidem dolorum odit
                        voluptas? Voluptate, eveniet?
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail-box">
                      <h1>We Provide Laundry Services</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eum magnam, voluptates distinctio, officia
                        architecto tenetur debitis hic aspernatur libero commodi
                        atque fugit adipisci, blanditiis quidem dolorum odit
                        voluptas? Voluptate, eveniet?
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail-box">
                      <h1>We Provide Laundry Services</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eum magnam, voluptates distinctio, officia
                        architecto tenetur debitis hic aspernatur libero commodi
                        atque fugit adipisci, blanditiis quidem dolorum odit
                        voluptas? Voluptate, eveniet?
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
