// Import Link component for client-side navigation between routes
import { Link } from "react-router";

// Navigation bar component that provides the main navigation structure
// Contains the app logo and upload resume button
const Navbar = () => {
  return (
    // Main navigation wrapper
    <nav className="navbar">
     
      {/* Home navigation - Links to the main landing page
                Displays the application name as a logo */}
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>

      {/* Primary action button that navigates to resume upload page */}
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    
    </nav>
  );
};

// Export Navbar for use in other parts of the application
export default Navbar;
