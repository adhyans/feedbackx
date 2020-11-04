import React from "react";
import Logo from "../Logo";
import { HomeHeaderWrapper } from "./styles";
import { Layout } from "../common/styles";
import { Link } from "@reach/router";

function HomeHeader() {
  return (
    <HomeHeaderWrapper>
      <Layout>
        <Logo width={190} height={29} />
        <div className="heading">
          <div className="title">
            <p>Peer feedback made easy</p>
          </div>
          <div className="subtitle">
            <p>Learn, Unlearn and Relearn</p>
          </div>
        </div>
        <div className="button">
          <Link to="/join">
            <button>Try feedbackx for free</button>
          </Link>
        </div>
      </Layout>
    </HomeHeaderWrapper>
  );
}

export default HomeHeader;
