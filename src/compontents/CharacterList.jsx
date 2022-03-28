import React, { useEffect } from "react";
import { connect } from "react-redux";
import CharacterCard from "./CharacterCard";
import { useDispatch } from "react-redux";
import { setCharacterList } from "../actions";

const CharacterList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharacterList());
  }, [dispatch]);

  return (
    <>
      <div className="character-list">
        {props.data.characterList.map((character, index) => (
          <CharacterCard
            image={character.displayIcon}
            name={character.displayName}
            role={{
              name: character.role.displayName,
              icon: character.role.displayIcon,
            }}
            key={index}
          ></CharacterCard>
        ))}
      </div>
    </>
  );
};

const stateMapToPros = (state) => {
  return {
    data: {
      loading: state.view.loading,
      characterList: state.character.characterList,
    },
  };
};

export default connect(stateMapToPros)(CharacterList);
