import { Outlet } from "react-router-dom";
import { UserHeader } from "../components/UserHeader";
import { Footer } from "../components/Footer";

export const UserLayout = () => {
  // const auth = false;
  // if(!auth){
  //   return <Navigate to="/home"/>
  // };

  return (
    <body>
      <UserHeader/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};
