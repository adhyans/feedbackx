import React from "react";
import { FooterBarWrapper, StyledLayout } from "./styles";
import Logo from "../Logo";

FooterBar.propTypes = {};

function FooterBar() {
  return (
    <FooterBarWrapper>
      <StyledLayout>
        <Logo width={120} height={18} fill="white" />
        <div className="text">
          <p>is made in India</p>
        </div>
      </StyledLayout>
    </FooterBarWrapper>
  );
}

export default FooterBar;
