import { Outlet } from "react-router-dom";
import { PublicHeader } from "../components/PublicHeader";
import { Footer } from "../components/Footer";

export const PublicLayout = () => {
  // const auth = false;
  // if(auth){
  //   return <Navigate to="/"/>
  // };
  return (
    <body>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
};
