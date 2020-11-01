import React from "react";
import HomeHeader from "../../HomeHeader";
import { HomeWrapper } from "./styles";
import { Layout } from "../../common/styles";
import FeatureCard from "../../FeatureCard";
import FooterBar from "../../FooterBar";

function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
      <Layout>
        <div className="tagline">
          <p>Consistent feedback, Great culture</p>
        </div>
        <div className="features">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </Layout>
      <FooterBar />
    </HomeWrapper>
  );
}

export default Home;
