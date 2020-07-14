import React from "react";
import { Card, CardText, CardImg, CardImgOverlay, Button } from "reactstrap";

const WelcomePage = () => {
  return (
    <Card inverse>
      <CardImg
        width="100%"
        className="cardImg"
        src="images/bg.jpg"
        alt="Card image cap"
      />
      <CardImgOverlay className="overlay">
        <CardText className="cardText1">Wellcome To Our Studio!</CardText>
        <CardText className="cardText2">It's nice to meet you</CardText>
        <Button className="cardBtn" href="#services">
          Tell me more
        </Button>
      </CardImgOverlay>
    </Card>
  );
};

export default WelcomePage;
