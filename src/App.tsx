import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { UserLayout } from "./layouts/UserLayout";
import { PublicHome } from "./pages/PublicHome";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { UserHome } from "./pages/UserHome";
import { Dashboard } from "./pages/userHome/UserDashboard";
import { Test } from "./pages/userHome/Test";
import { Rock } from "./pages/userHome/Rock";
import { Correlation } from "./pages/userHome/Correlation";
import { Support } from "./pages/userHome/support/Support";
import { FAQ } from "./pages/userHome/support/FAQ";
import { Documentation } from "./pages/userHome/support/Documentation";
import { Contact } from "./pages/userHome/support/Contact";
import { Resources } from "./pages/userHome/support/Resources";

function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicHome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      {/* Rutas privadas */}
      <Route element={<UserLayout />}>
        <Route path="/workspace" element={<UserHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
        <Route path="/rocks" element={<Rock />} />
        <Route path="/correlations" element={<Correlation />} />
        <Route path="/support" element={<Support />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support">
          <Route index element={<Support />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Route>
      <Route path="*" element="Página no valida" />
    </Routes>
  );
}

export default App;
