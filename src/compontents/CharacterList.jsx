import React, { useEffect } from "react";
import { connect } from "react-redux";
import CharacterCard from "./CharacterCard";
import { useDispatch } from "react-redux";
import { getCharacters } from "../actions";

const CharacterList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <>
      <div className="d-flex">
        {props.result.characters.length ? (
          props.result.characters.map((character, index) => (
            <CharacterCard
              image={character.displayIcon}
              name={character.displayName}
              role={{
                name: character.role.displayName,
                icon: character.role.displayIcon,
              }}
              key={index}
            ></CharacterCard>
          ))
        ) : (
          <h3>Cargando...</h3>
        )}
      </div>
    </>
  );
};

const stateMapToPros = (state) => {
  return {
    result: {
      loading: state.view.loading,
      characters: state.character.response,
    },
  };
};

export default connect(stateMapToPros)(CharacterList);
