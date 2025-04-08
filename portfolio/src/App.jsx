import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Technologys from "./components/sections/Technologys";
import Information from "./components/sections/Information";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import AdminLogInModal from "./components/AdminUI/AdminLogInModal";

function App() {
  const [isActiveSection, setIsActiveSection] = useState(null);
  const [isOpenAdminModal, setIsOpenAdminModal] = useState(false);
  const [admin, setAdmin] = useState({
    name: "Mcan",
    password: "147896325",
  });
  return (
    <>
      <div>
        <Sidebar
          activeSectionCheck={isActiveSection}
          openAdminModal={() => setIsOpenAdminModal(true)}
        />
        <AdminLogInModal
          openCheck={isOpenAdminModal}
          closeModal={() => setIsOpenAdminModal(false)}
        />
        <Home
          activeSectionCheck={isActiveSection}
          active={() => setIsActiveSection("home")}
          deActive={() => setIsActiveSection(null)}
        />
        <Projects
          activeSectionCheck={isActiveSection}
          active={() => setIsActiveSection("projects")}
          deActive={() => setIsActiveSection(null)}
        />
        <Technologys
          activeSectionCheck={isActiveSection}
          active={() => setIsActiveSection("technologys")}
          deActive={() => setIsActiveSection(null)}
        />
        <Information
          activeSectionCheck={isActiveSection}
          active={() => setIsActiveSection("information")}
          deActive={() => setIsActiveSection(null)}
        />
      </div>
    </>
  );
}

export default App;
