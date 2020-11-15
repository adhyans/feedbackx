import React from "react";
import PropTypes from "prop-types";
import { LeftnavWrapper } from "./styles";
import Logo from "../Logo";
import Graph from "../../Icons/Graph";
import Team from "../../Icons/Team";
import Org from "../../Icons/Org";
import Settings from "../../Icons/Settings/Settings";
import Overview from "../../Icons/Overview";

Leftnav.propTypes = {
  navItems: PropTypes.array,
};

Leftnav.defaultProps = {
  navItems: [
    {
      label: "Overview",
      Icon: Overview,
    },
    {
      label: "Insights",
      Icon: Graph,
    },
    {
      label: "Teams",
      Icon: Team,
    },
    {
      label: "Org Settings",
      Icon: Org,
    },
    {
      label: "Accout Settings",
      Icon: Settings,
    },
  ],
};

function Leftnav({ navItems }) {
  return (
    <LeftnavWrapper>
      <div className="header">
        <Logo width={140} height={40} />
      </div>
      {navItems.map(({ label, Icon }, index) => {
        return (
          <div className="item" key={index}>
            <div className="icon">
              <Icon width="44" height="44" />
            </div>
            <div className="name">
              <p>{label}</p>
            </div>
          </div>
        );
      })}
    </LeftnavWrapper>
  );
}

export default Leftnav;
