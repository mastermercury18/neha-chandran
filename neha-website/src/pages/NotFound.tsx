import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="content-container text-center">
        <h1 className="gradient-text text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">oops! page not found</p>
        <Link 
          to="/" 
          className="text-primary hover:underline font-medium"
        >
          return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
