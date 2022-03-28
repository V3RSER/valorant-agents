import axios from "../config";

export const characterStreamingServices = () => {
  const getCharacterList = () => {
    return axios({
      method: "GET",
      url: "/agents?language=es-ES&&isPlayableCharacter=true",
    });
  };

  const getCharacter = (id) => {
    return axios({
      method: "GET",
      url: "/agents/" + id + "?language=es-ES",
    });
  };

  return {
    getCharacterList,
    getCharacter,
  };
};

export default characterStreamingServices();
