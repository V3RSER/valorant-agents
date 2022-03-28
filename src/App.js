import AgentList from "./compontents/AgentList";
import AgentPage from "./compontents/AgentPage";
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
            <Route path="/" element={<AgentList />} />
            <Route path="/role/:role" element={<AgentListRole />} />
            <Route path="/agent/:id" element={<AgentPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
