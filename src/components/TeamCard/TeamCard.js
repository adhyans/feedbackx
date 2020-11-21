import React from "react";
import PropTypes from "prop-types";
import { TeamCardWrapper } from "./styles";

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  manager: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};

function TeamCard({ name, manager, count, ...props }) {
  return (
    <TeamCardWrapper {...props}>
      <div className="manager">
        <p className="title">Manager:</p>
        <p className="text">{manager}</p>
      </div>
      <div className="name">
        <p className="title">Name:</p>
        <p className="text">{name}</p>
      </div>
      <div className="count">
        <p className="title">Members count:</p>
        <p className="text">{count}</p>
      </div>
    </TeamCardWrapper>
  );
}

export default TeamCard;
