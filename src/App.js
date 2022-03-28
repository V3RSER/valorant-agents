import AgentListHome from "./compontents/AgentListHome";
import AgentPage from "./compontents/AgentPage";
import AgentListFavorite from "./compontents/AgentListFavorite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./compontents/Header";
import AgentListRole from "./compontents/AgentListRole";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/valorant-agents/" element={<AgentListHome />} />
            <Route path="/valorant-agents/role/:role" element={<AgentListRole />} />
            <Route path="/valorant-agents/favorites" element={<AgentListFavorite />} />
            <Route path="/valorant-agents/agent/:id" element={<AgentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
