import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginPage/LoginScreen";
import RegisterScreen from "./screens/RegisterPage/RegisterScreen";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={() => <LoginScreen />} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/mynotes" component={() => <MyNotes />} />
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
