import React from "react";
import "./../css/Navbar.css";

export const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav>
      <img
        className="logo"
        src="https://api.freelogodesign.org/files/f077bb1a586a4cc7afd80d94fe0a7eb1/thumb/logo_200x200.png?v=637652428960000000"
      />
      <div>
        <a
          id="links"
          href="/homepage"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? " nav-link active" : "nav-link"}
        >
          Mood Journal
        </a>

        <a
          id="links"
          href="/AllMoods"
          onClick={() => handlePageChange("Saved")}
        >
          Saved Entries
        </a>

        <a className="mrg" onClick={logout}>
          Logout
        </a>
        {/* </li>
           </ul> */}
      </div>
    </nav>
  );
};

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}
