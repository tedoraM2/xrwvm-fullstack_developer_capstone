import LoginPanel from "./components/Login/Login"
import Dealers from './components/Dealers/Dealers';
import Register from './components/Register/Register';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
export default App;
