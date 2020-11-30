import React, { useState, useRef, useEffect } from "react";
import Add from "../../Icons/Add";
import { TeamWrapper, InputWrapper, ButtonWrapper } from "./styles";
import FlatButton from "../common/FlatButton";
import Divider from "../common/Divider";
import TeamCard from "../TeamCard";
import InputWithIcon from "../common/InputWithIcon";
import MagnifyingGlass from "../../Icons/MagnifyingGlass";
import Modal from "../common/Modal";
import { API, graphqlOperation } from "aws-amplify";
import { createTeam } from "../../graphql/mutations";
import { listTeams } from "../../graphql/queries";

Team.propTypes = {};

function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teams, setTeams] = useState([]);
  const teamInputNode = useRef(null);
  const managerInputNode = useRef(null);

  async function onClickAddTeam() {
    try {
      const teamData = {
        manager_name: managerInputNode.current.value,
        team_name: teamInputNode.current.value,
        member_count: 0,
      };
      await API.graphql(graphqlOperation(createTeam, { input: teamData }));
    } catch (err) {
      console.error("err creating a team", err);
    }
  }

  async function fetchTeams() {
    try {
      const teams = await API.graphql(graphqlOperation(listTeams));
      setTeams(teams?.data?.listTeams?.items || []);
    } catch (err) {
      console.error("err fetching teams", err);
    }
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <TeamWrapper>
      <div className="header">
        <div className="add">
          <Add width="28" height="28" />
          <FlatButton
            onClick={() => {
              setIsModalOpen(true);
            }}
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
      {teams.map((team) => (
        <TeamCard
          name={team.team_name}
          manager={team.manager_name}
          count={team.member_count}
          className="team-card"
          key={team.id}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        title="Add Team"
      >
        <InputWrapper
          placeholder="Manager name"
          className="manager-input"
          ref={managerInputNode}
        />
        <InputWrapper
          placeholder="Team name"
          className="team-input"
          ref={teamInputNode}
        />
        <ButtonWrapper
          text="Add"
          width="8rem"
          height="3.5rem"
          onClick={onClickAddTeam}
        />
      </Modal>
    </TeamWrapper>
  );
}

export default Team;
