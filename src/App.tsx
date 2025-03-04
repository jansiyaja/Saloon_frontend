import { Routes, Route } from "react-router-dom";
import FRONTEND_ROUTES from "./Routes/frontendRoutes";
import Layout from "./Layout";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Home from "./pages/Home/Home";
import "./App.css"
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
const App = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={FRONTEND_ROUTES.SERVICES} element={<Services />} /> 
        <Route path={FRONTEND_ROUTES.ABOUT} element={<About />} /> 
        <Route path={FRONTEND_ROUTES.CONTACT} element={<Contact />} /> 
       

      </Route>
     

 
      <Route path={FRONTEND_ROUTES.REGISTER} element={<Register />} /> 
      <Route path={FRONTEND_ROUTES.LOGIN} element={<Login />} /> 
      <Route path={FRONTEND_ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} /> 
    </Routes>
  );
};

export default App;
