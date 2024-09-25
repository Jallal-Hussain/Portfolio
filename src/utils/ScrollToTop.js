import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLocationChange = () => {
      window.scrollTo(0, 0);
    };

    const unlisten = navigate(handleLocationChange);

    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default ScrollToTop;
