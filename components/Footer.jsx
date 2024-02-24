import React from "react";
import {
  TiSocialPinterestCircular,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  const social = [
    {
      link: "#",
      name: "Twitter",
      icon: <TiSocialTwitter />,
    },
    {
      link: "#",
      name: "YouTube",
      icon: <TiSocialYoutube />,
    },
    {
      link: "#",
      name: "Instagram",
      icon: <TiSocialInstagram />,
    },
  ];
  return (
    <footer className="footer" id="site-footer">
      <canvas id="can"></canvas>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <div className="widget w-info">
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit tempora quaerat maxime mollitia provident aperiam
                nostrum qui minus, porro libero accusamus hic est fugit! Vel
                iusto quisquam perferendis amet ipsa?
              </p>
            </div>

            <div className="widget w-contacts">
              <ul className="socials socials--white">
                {social.map((social, index) => (
                  <li key={index} className="social-item">
                    <a href={social.link} className="woox-icon">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <span>@ All rights reserved 2024</span>
              <span>
                <a href="/">The GemoneycoinToken</a> - ICO and Cryptocurrency web3
              </span>

              <div className="logo-design">
                <img src="img/logo-fire.png" alt="" />

                <div className="design-wrap">
                  <div className="sup-title">Design By</div>
                  <a
                    href="https://gemoneycoin.org"
                    className="logo-title"
                  >
                    @Gemnoneycoin
                  </a>
                </div>
              </div>

              <div className="logo-design logo-design-crumina">
                <img src="img/crumina-logo.png" alt="" />
                <div className="design-wrap">
                  <div className="sup-title">Design By</div>
                  <a
                    href="https://gemoneycoin.org"
                    className="logo-title"
                  >
                    The Gemoneycoin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="back-to-top"></a>
    </footer>
  );
};

export default Footer;
