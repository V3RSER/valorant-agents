import React from "react";

const imageStyle = { width: "250px", height: "250px" };
const iconStyle = { width: "30px", height: "30px" };
const CharacterCard = ({ image, name, role }) => {
  return (
    <div className="justify-content-center ">
      <div className="card ">
        <img
          className="card-img-top"
          src={image}
          alt={name}
          style={imageStyle}
        ></img>
        <div className="bg-danger py-1">
        <h3 className="text-center m-0">{name.toUpperCase()}</h3>
        </div>
        <div className="card-footer bg-secondary d-flex justify-content-center">
          <img
            className="mr-2"
            src={role.icon}
            alt={role.name}
            style={iconStyle}
          ></img>
          <h5 className="card-text">{role.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
