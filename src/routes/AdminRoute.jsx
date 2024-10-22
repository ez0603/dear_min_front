import { useEffect, useState } from "react";
import MobileRoute from "./MobileRoute";
import DesktopRoute from "./DesktopRoute";

function AdminRoute() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileRoute /> : <DesktopRoute />;
}

export default AdminRoute;
