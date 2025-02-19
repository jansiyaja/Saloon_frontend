import { Routes, Route } from "react-router-dom";
import FRONTEND_ROUTES from "./Routes/frontendRoutes";
import Home from "./pages/Home";

import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

      </Route>

      {/* Routes WITHOUT Layout (Login & Register) */}
      <Route path={FRONTEND_ROUTES.LOGIN} element={<Login />} />
      <Route path={FRONTEND_ROUTES.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default App;
