import React from "react";

const Jumbo = () => {
  return (
    <header class="jumbo">
      <div class="container row-content">
        <div class="row row-header">
          <div class="col-12 col-sm-6">
            <h1>
              Naizag<span style={{ color: "gold" }}>AI</span>
            </h1>
            <br />
            <p>
              Мы являемся молодым стартапом в области оптимизации процессов
              производства в ресурсодобывающей индустрии. Мы специализируемся на
              добыче способов наебать судейскую коллегию
            </p>
          </div>
          <div class="col-sm-6 col-md-4 offset-md-1">
            <img
              src="logo.png"
              alt="naizagai logo"
              class="img-responsive fit-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbo;
