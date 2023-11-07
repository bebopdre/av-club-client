import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import './App.scss';
import PickAvatar from "./pages/PickAvatar/PickAvatar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pick-avatar' element={<PickAvatar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
