import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { setAgent } from "../actions";
import AbilityInfo from "./AbilityInfo";
import AbilityButton from "./AbilityButton";

const AgentPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAgent("5f8d3a7f-467b-97f3-062c-13acf203c006"));
  }, [dispatch]);

  return (
    <div className="agent-page">
      <div className="row">
        <div className="col-md-6 py-5">
          <h1 className="text-center">{props.data.agent.displayName?.toUpperCase()}</h1>
          <img
            className="img-fluid"
            src={props.data.agent.fullPortraitV2}
            alt="portrait"
          ></img>
        </div>
        <div className="col-md-6 py-5">
        
        <h2 className="text-center">HABILIDADES</h2>
          <ul className="abilities">
            {props.data.agent.abilities.map((a, index) => (
              <AbilityButton
                key={index}
                icon={a.displayIcon}
                name={a.displayName}
                ability={a.slot}
              />
            ))}
          </ul>
          {props.data.agent.abilities
            .filter((a) => a.slot === props.data.ability)
            .map((a, index) => (
              <AbilityInfo
                key={index}
                slot={a.slot}
                name={a.displayName}
                description={a.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const stateMapToPros = (state) => {
  return {
    data: {
      loading: state.view.loading,
      agent: state.agent.agent,
      ability: state.agent.ability,
    },
  };
};

export default connect(stateMapToPros)(AgentPage);
