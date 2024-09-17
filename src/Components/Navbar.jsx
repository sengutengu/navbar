import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/navbar" className="title">
        Website
      </Link>
      <ul>
        <li>
          <NavLink to="/navbar/interests">Interests</NavLink>
        </li>
        <li>
          <NavLink to="/navbar/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/navbar/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};
