import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components/AdminHeader";
import { Footer } from "../components/Footer";

export const AdminHome = () => {
  return (
    <section>
      <AdminHeader />
      <Outlet />
      <Footer />
    </section>
  );
};
