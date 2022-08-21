import {HomePage, Login, Signup, Register} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/homepage" element={<HomePage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Signup />} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="*" element={<h1>404 not found</h1>} />
              </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;

