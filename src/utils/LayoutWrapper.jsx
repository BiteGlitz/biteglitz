import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const LayoutWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDone, setLoadingDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !loadingDone) {
      const hasVisited = localStorage.getItem("hasVisited");
      const isFirstLoadPage = location.pathname === "/first-load";

      if (!hasVisited) {
        if (!isFirstLoadPage) {
          navigate("/first-load", { replace: true });
        }
      }

      setLoadingDone(true); // allow Outlet to render after redirect logic
    }
  }, [isLoading, loadingDone, navigate, location]);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  // Avoid rendering <Outlet /> until redirect logic finishes
  if (!loadingDone) {
    return null;
  }

  return <Outlet />;
};

export default LayoutWrapper;
