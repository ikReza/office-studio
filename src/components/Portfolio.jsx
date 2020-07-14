import React, { useState } from "react";

import ExampleModal from "./ExampleModal";

const portfolioLinks = [
  {
    title: "Threads",
    caption: "Illustration",
    image: `https://unsplash.it/350/140/?${Math.floor(
      Math.random(0, 100) * 100
    )}`,
  },
  {
    title: "Explore",
    caption: "Graphic Design",
    image: `https://unsplash.it/350/140/?${Math.floor(
      Math.random(0, 100) * 100
    )}`,
  },
  {
    title: "Finish",
    caption: "Identity",
    image: `https://unsplash.it/350/140/?${Math.floor(
      Math.random(0, 100) * 100
    )}`,
  },
  {
    title: "Lines",
    caption: "Branding",
    image: `https://unsplash.it/350/140/?${Math.floor(
      Math.random(0, 100) * 100
    )}`,
  },
  {
    title: "Southwest",
    caption: "Website Design",
    image: `https://unsplash.it/350/140/?${Math.floor(
      Math.random(0, 100) * 100
    )}`,
  },
  {
    title: "Window",
    caption: "Photography",
    image: `https://unsplash.it/350/140/?${Math.floor(
      Math.random(0, 100) * 100
    )}`,
  },
];

const Portfolio = (props) => {
  const [photo, setPhoto] = useState(null);
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        {portfolioLinks &&
          portfolioLinks.map(({ title, caption, image }, index) => (
            <div className="col-md-4 col-sm-6 portfolio-item" key={index}>
              <a
                onClick={() => {
                  setModal(!modal);
                  setPhoto(image);
                }}
                className="portfolio-link"
                href="#modal"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={image} alt="portfolio_img" />
              </a>
              <ExampleModal
                modal={modal}
                setModal={setModal}
                photo={photo}
                title={title}
              />
              <div className="portfolio-caption text-center">
                <h4>{title}</h4>
                <p className="text-muted">{caption}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
