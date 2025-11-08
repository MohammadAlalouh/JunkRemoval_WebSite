import { NavLink } from "./NavLink";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img src={logo} alt="Premier Junk Removal Solutions" className="h-12 w-auto" />
            <span className="font-bold text-lg hidden sm:inline">Premier Junk Removal Solutions</span>
          </NavLink>
          <div className="flex gap-6">
            <NavLink 
              to="/" 
              className="hover:text-secondary transition-colors"
              activeClassName="text-secondary font-semibold"
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className="hover:text-secondary transition-colors"
              activeClassName="text-secondary font-semibold"
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className="hover:text-secondary transition-colors"
              activeClassName="text-secondary font-semibold"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
