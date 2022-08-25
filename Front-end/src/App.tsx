import {HomePage, Login, Register} from "./pages";
import {Route, Routes, useRoutes} from "react-router-dom";
import routes from "./routes/index"

const App = () => {
    const element = useRoutes(routes)
    return (
        <div>
          {element}
        </div>
    );
};

export default App;

