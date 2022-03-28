import axios from "../config";

export const agentStreamingServices = () => {
  const getAgentList = () => {
    return axios({
      method: "GET",
      url: "/agents?language=es-ES&&isPlayableCharacter=true",
    });
  };

  const getAgent = (id) => {
    return axios({
      method: "GET",
      url: "/agents/" + id + "?language=es-ES",
    });
  };

  return {
    getAgentList,
    getAgent,
  };
};

export default agentStreamingServices();
