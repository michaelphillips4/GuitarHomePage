import { NavLink } from "react-router";

export function Nav() {

  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/player">Music Player</NavLink></li>
        <li><NavLink to="/video">Videos</NavLink> </li>
      </ul>
    </nav>
  );
}