import Navbar from "./Shared/Navbar";
import { AuthProvider } from "@/pages/AuthProvider";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
       <div>
      <Navbar />
      <main>{children}</main>
    </div>
    </AuthProvider>
   
  );
};

export default Layout;
