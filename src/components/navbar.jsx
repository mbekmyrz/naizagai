import React from "react";

const NavBar = () => {
  return (
    <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#Navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="Navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Главная
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                О проекте
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#process">
                Процессы
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#team">
                Наша команда
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
