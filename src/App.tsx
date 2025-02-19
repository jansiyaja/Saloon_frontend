
import { Routes, Route } from "react-router-dom";
import FRONTEND_ROUTES from "./Routes/frontendRoutes";
import Home from "./pages/Home";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
      <Route path={FRONTEND_ROUTES.HOME} element={<Layout><Home /></Layout>} />
        </Routes>
    </>
  )
}

export default App
