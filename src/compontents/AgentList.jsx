import React, { useEffect } from "react";
import { connect } from "react-redux";
import AgentCard from "./AgentCard";
import { useDispatch } from "react-redux";
import { setAgentList } from "../actions";

const AgentList = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAgentList());
  }, [dispatch]);

  return (
    <>
      <div className="agent-list">
        {props.data.agentList.map((agent, index) => (
          <AgentCard
            id={agent.uuid}
            image={agent.displayIcon}
            name={agent.displayName}
            role={{
              name: agent.role.displayName,
              icon: agent.role.displayIcon,
            }}
            key={index}
          ></AgentCard>
        ))}
      </div>
    </>
  );
};

const stateMapToPros = (state) => {
  return {
    data: {
      loading: state.view.loading,
      agentList: state.agent.agentList,
    },
  };
};

export default connect(stateMapToPros)(AgentList);
