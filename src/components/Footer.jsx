import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">
              Copyright &copy; Your Website 2019
            </span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-twitter fa-stack-1x fa-inverse fafooter"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-facebook fa-stack-1x fa-inverse fafooter"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse fafooter"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="#something">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#something">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
