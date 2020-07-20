import React from "react";

const journey = [
  {
    image: "images/1.jpg",
    year: "2009-2011",
    title: "Our Humble Beginings",
  },
  {
    image: "images/2.jpg",
    year: "March 2011",
    title: "An Agency is Born",
  },
  {
    image: "images/3.jpg",
    year: "December 2012",
    title: "Transition to Full Service",
  },
  {
    image: "images/4.jpg",
    year: "July 2014",
    title: "Phase Two Expansion",
  },
];

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        <ul className="timeline">
          {journey.map((go, i) => (
            <li className="list-unstyled about-list" key={i}>
              <div className="row row-content align-items-center">
                <div className="col-11 col-sm-11 col-md-3">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={go.image}
                      alt={go.title}
                    />
                  </div>
                </div>
                <div className="col-11 col-sm-11 col-md">
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{go.year}</h4>
                      <h4 className="subheading">{go.title}</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li className=" list-unstyled list-bottom">
            <div className="row row-content align-items-center">
              <div className="col-4 col-sm-4 col-md-3">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </div>
              <div className="col col-sm-4 col-md-3">
                <div className="timeline-image">
                  <h4>
                    Share
                    <br />
                    Our
                    <br />
                    Dream!
                  </h4>
                </div>
              </div>
              <div className="col-4 col-sm col-md-5">
                <div className="timeline-image">
                  <h4>
                    Believe
                    <br />
                    In
                    <br />
                    Yourself!
                  </h4>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
