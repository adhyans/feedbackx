import React from "react";
import Add from "../../Icons/Add";
import { TeamWrapper } from "./styles";
import FlatButton from "../common/FlatButton/FlatButton";
import Divider from "../common/Divider/Divider";
import TeamCard from "../TeamCard";
import InputWithIcon from "../common/InputWithIcon";
import MagnifyingGlass from "../../Icons/MagnifyingGlass";

Team.propTypes = {};

function Team() {
  return (
    <TeamWrapper>
      <div className="header">
        <div className="add">
          <Add width="28" height="28" />
          <FlatButton
            width="12.6rem"
            height="3.2rem"
            text="Add team"
            className="add-team"
          />
        </div>
        <InputWithIcon
          height="4rem"
          Icon={MagnifyingGlass}
          placeholder="search team"
        />
      </div>
      <Divider height="0.3rem" topMargin="2rem" />
      <TeamCard
        name="web team"
        manager="john doe"
        count="10"
        className="team-card"
      />
      <TeamCard
        name="web team"
        manager="john doe"
        count="10"
        className="team-card"
      />
      <TeamCard
        name="web team"
        manager="john doe"
        count="10"
        className="team-card"
      />
    </TeamWrapper>
  );
}

export default Team;
