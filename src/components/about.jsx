export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <div className="about-text-style ">
                <h2 className="header-text-h4">
                  Why<br></br> WM SPICES
                </h2>
              </div>
              <div className="paragraph-text-style">
                <p className="about-us-text-color">
                  {props.data
                    ? "WM Spices (Pvt) Ltd engaged in manufacturing, distributing, and exporting of premium quality Ceylon Cinnamon (Organic, Non- Organic) Powders, Sticks, and oil Products. Sri Lanka has been the center of the spice trade throughout history. The main spice unique to Sri Lanka is Cinnamon, the country has attained long-standing reputation in the global market with its quality, uniqueness, color and aroma.it was realized there is a good opportunity available in the global market to position quality value added cinnamon product in a Sri Lankan brand. So as a company we are ready to provide our spices to the world under the theme of luxury. (The icon of luxurious spices) We are glad to have a keen focus on customer service and premium quality supply chain to the local and international customers. "
                    : "loading..."}
                </p>
              </div>
              {/* <div>
                <h3 className="text-align-style header-text-h4">
                  Why Choose Us?
                </h3>
              </div>
              <div className="list-style about-us-text-color text-align-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            {" "}
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="text-container">
                  <img
                    src="img/box-img-1.png"
                    alt="Snow"
                    className="image-under-text"
                  ></img>
                  <div className="main-text-1">
                    Healthy <br></br> Products
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="text-container">
                  <img
                    src="img/box-img-3.png"
                    alt="Snow"
                    className="image-under-text"
                  ></img>
                  <div className="main-text-1">
                    Quality <br></br> Excellence
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="text-container">
                  <img
                    src="img/box-img-2.png"
                    alt="Snow"
                    className="image-under-text"
                  ></img>
                  <div className="main-text-1">
                    Traditional <br></br> Techniques
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="text-container">
                  <img
                    src="img/box-img-4.png"
                    alt="Snow"
                    className="image-under-text"
                  ></img>
                  <div className="main-text-1">
                    International <br></br> Standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-family-trad">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <div className="about-text-style">
                <h2 className="header-text-h4">A Family Tradition</h2>
              </div>
              <div className="fam-trad-text">
                <h4 className="header-text-h4">
                  BRINGING THE NATURAL GOODNESS OF AUTHENTIC CEYLON SPICES TO
                  THE WORLD FOR THREE DECADES
                </h4>
              </div>
              <div className="paragraph-text-style">
                <p className="about-us-text-color">
                  {props.data
                    ? "We are an award winning, family owned operation who has understood the pulse of those who admire the exotic Ceylon spices from the tropical island Sri Lanka in which we tend our own spice estates. Owing our humble beginnings to the miraculous herb, Ceylon Cinnamon, we have now evolved to produce the finest Sri Lankan spices"
                    : "loading..."}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            {" "}
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="text-container">
                  <img
                    src="img/box-img-8.png"
                    alt="Snow"
                    className="image-under-text"
                  ></img>
                  <div className="main-text-1">
                    Our Product <br></br> Range
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="text-container">
                  <img
                    src="img/box-img-3.png"
                    alt="Snow"
                    className="image-under-text"
                  ></img>
                  <div className="main-text-1">
                    {/* Quality <br></br> Excellence */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
