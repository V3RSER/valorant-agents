import React from "react";
import { useNavigate } from "react-router-dom";

const AgentCard = ({ id, image, name, role }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/agent/${id}`);
  };

  return (
    <div className="agent-card">
      <img
        onClick={() => handleClick()}
        className="image"
        loading="lazy"
        src={image}
        alt={name}
      ></img>
      <div className="name">
        <h2 onClick={() => handleClick()}>{name.toUpperCase()}</h2>
      </div>
      <div className="role">
        <img loading="lazy" src={role.icon} alt={role.name}></img>
        <h3>{role.name}</h3>
      </div>
    </div>
  );
};

export default AgentCard;
