import React from "react";

const AgentCard = ({ image, name, role }) => {
  return (
    <div className="agent-card">
      <img className="image" loading="lazy" src={image} alt={name}></img>
      <div className="name">
        <h2>{name.toUpperCase()}</h2>
      </div>
      <div className="role">
        <img loading="lazy" src={role.icon} alt={role.name}></img>
        <h3>{role.name}</h3>
      </div>
    </div>
  );
};

export default AgentCard;
