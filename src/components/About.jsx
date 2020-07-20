import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { Typography, Box, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { journey } from "./project";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  pic: {
    borderRadius: "50%",
    height: "120px",
    width: "120px",
  },
  box: {
    borderRadius: "50%",
    height: "120px",
    width: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fed136",
  },
  timeItem: {
    minHeight: "45vh",
  },
}));

const About = () => {
  const classes = useStyles();
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
      <Hidden smDown>
        <Timeline align="alternate">
          {journey.map((j, i) => (
            <TimelineItem key={i} className={classes.timeItem}>
              <TimelineSeparator>
                <TimelineDot>
                  <img className={classes.pic} src={j.image} alt={j.title} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {j.year}
                  </Typography>
                  <Typography variant="h6" component="h1">
                    {j.title}
                  </Typography>
                  <Typography style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Box className={classes.box}>
                  <Typography align="center" variant="h6">
                    Be Part <br />
                    of Our <br />
                    Story
                  </Typography>
                </Box>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </Hidden>
      <Hidden mdUp>
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
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
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
              </div>
            </li>
          </ul>
        </div>
      </Hidden>
    </div>
  );
};

export default About;
