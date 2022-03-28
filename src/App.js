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
            <Route path="/" element={<AgentListHome />} />
            <Route path="/role/:role" element={<AgentListRole />} />
            <Route path="/favorites" element={<AgentListFavorite />} />
            <Route path="/agent/:id" element={<AgentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
