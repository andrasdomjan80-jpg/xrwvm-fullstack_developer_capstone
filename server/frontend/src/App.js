import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";   // <-- import Register
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />  {/* <-- new route */}
    </Routes>
  );
}

export default App;
