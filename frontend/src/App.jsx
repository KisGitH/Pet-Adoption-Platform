import React, { useState } from "react";
import Header from "./Components/Header";
import Adopt from "./Components/Adopt";
import GetInvolved from "./Components/GetInvolved";
import ContactUs from "./Components/ContactUs";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Blog from "./Components/Blog";
import AboutUs from "./Components/AboutUs";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login"); // Tracks current page
  const [showContactUs, setShowContactUs] = useState(false);

  const handleToggleContactUs = () => {
    setShowContactUs(true); // Toggles visibility
  };

  return (
    <div className="w-full overflow-hidden font-Ubuntu">
      {currentPage === "login" && (
        <LoginPage
          onLogin={() => setCurrentPage("app")} // Navigate to App content
          onRegister={() => setCurrentPage("register")} // Navigate to Register page
        />
      )}
      {currentPage === "register" && (
        <RegisterPage onBackToLogin={() => setCurrentPage("login")} />
      )}
      {currentPage === "app" && (
        <>
          <Header handleToggleContactUs={handleToggleContactUs} />
          <Adopt />
          <GetInvolved handleToggleContactUs={handleToggleContactUs} />
          <Blog />
          {showContactUs && <ContactUs onClose={() => setShowContactUs(false)} />}
          <AboutUs/>
        </>
      )}
    </div>
  );
};

export default App;
