import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Contact = () => {
  return (
    <div className="contact-form-bg">
      <div className=" container contact-form">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase contact-heading">
              Contact Us
            </h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <FormGroup className="form-input">
                    <Input placeholder="Your Name *" required />
                  </FormGroup>
                  <FormGroup className="form-input">
                    <Input type="email" placeholder="Your Email *" required />
                  </FormGroup>
                  <FormGroup>
                    <Input type="tel" placeholder="Your Phone *" required />
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <Input
                      type="textarea"
                      placeholder="Your Message *"
                      required
                      rows="6"
                    />
                  </FormGroup>
                </div>
              </div>
              <div className="col-lg-12 text-center mt-3 mb-3">
                <Button className="contact-button" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
