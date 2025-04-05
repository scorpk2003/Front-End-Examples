import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import RegisterScreen from "./screens/RegisterPage/RegisterScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/register" element={<RegisterScreen />} exact />
          <Route path="/mynotes" Component={() => <MyNotes />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
