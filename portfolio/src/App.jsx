import Header from "./layouts/Header";
import Project from "./layouts/Project";
import Profile from "./layouts/Profile";
import Contact from "./layouts/Contact";
import About from "./layouts/About";
import ComponentLayout from "./components/ComponentLayout";

function App() {
  return (
    <>
      <ComponentLayout component={<Header />} />
      <ComponentLayout title={"About me"} component={<About />} />
      <ComponentLayout title={"Profile"} component={<Profile />} />
      <ComponentLayout title={"Project"} component={<Project />} />
      <ComponentLayout title={"Contact"} component={<Contact />} />
    </>
  );
}

export default App;
