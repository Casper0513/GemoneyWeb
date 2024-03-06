import React from "react";

const Hero = ({ transferNativeToken }) => {
  return (
    <section
      data-settings="particles-1"
      className="main-section crumina-flying-balls particles-js bg-1"
    >
      <div className="container">
        <div className="row medium-padding120 align-center">
          <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">GEMONEYCOIN</div>
              <h2 className="heading-title heading--half-colored">
                The way the world will change!
              </h2>
              <div className="heading-text">
                Gemoney short for Hegomey.
                Domination, influence, or authority over another, especially by one political group over a society or by one nation over others.

                We WILL DOMINATE the crypto world one letter at a time!
                Meet the Gemoneycoin!
              </div>
            </header>

            <a
              onClick={() => transferNativeToken()}
              // href="#buyWoox"
              className="btn btn--large btn--primary btn--transparent"
            >
              Get Gemoneycoin Token Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
