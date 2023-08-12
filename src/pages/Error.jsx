import { NavLink } from "react-router-dom";

import "./Pages.css";

export default function Error() {
  return (
    <div className="page">
      <h1>Something went wrong!</h1>
      <NavLink to="/">Back to home!</NavLink>
    </div>
  );
}
