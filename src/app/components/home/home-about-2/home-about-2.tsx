export default function HomeAbout2() {
  return (
    <section className="about_section about_section2">
      <div className="container  ">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>How It Works</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="img-box">
              <img src="images/about-img2.jpg" alt="" />
              <div className="play_btn">
                <button>
                  <i className="fa fa-play" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
