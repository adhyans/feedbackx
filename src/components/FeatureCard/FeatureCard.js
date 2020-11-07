import React from "react";
import { FeatureCardWrapper } from "./styles";

FeatureCard.propTypes = {};

function FeatureCard() {
  return (
    <FeatureCardWrapper>
      <div className="box"></div>
      <div className="title">
        <p>Heading</p>
      </div>
      <div className="subtitle">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </FeatureCardWrapper>
  );
}

export default FeatureCard;
