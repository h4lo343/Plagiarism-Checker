import {HomePage, Login, Signup} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;

