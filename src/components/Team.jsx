import React from "react";

const members = [
  {
    name: "Lorem Ipsum",
    role: "Lead Designer",
    image: "images/team-1.webp",
  },
  {
    name: "Lorem Ipsum",
    role: "Lead Marketer",
    image: "images/team-2.webp",
  },
  {
    name: "Lorem Ipsum",
    role: "Lead Developer",
    image: "images/team-3.png",
  },
];

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
      </div>
      <div className="row">
        {members.map((member, i) => (
          <div className="col-sm-12 col-md-12 col-lg-4" key={i}>
            <div className="text-center">
              <img
                className="team-img rounded-circle"
                src={member.image}
                alt={member.name}
              />
              <h4 style={{ marginTop: "1.5rem" }}>{member.name}</h4>
              <p className="text-muted">{member.role}</p>
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
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center mt-4">
          <p className="large text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
