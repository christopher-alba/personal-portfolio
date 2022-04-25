import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
