import AgentList from "./compontents/AgentList";
import AgentPage from "./compontents/AgentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgentList />} />
          <Route path="/agent/:id" element={<AgentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
