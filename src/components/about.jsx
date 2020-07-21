import React from "react";
import project_banner from "../images/project_banner.png";

const About = () => {
  return (
    <div class="content-segment" id="about">
      <div class="row justify-content-center row-title">
        <h1 class="text-center">Наш проект</h1>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-8 text-center">
          <p>
            Наш проект фокусируется на создании автономного технологического
            решения, используещего анализ изображений и машинное обучение для
            того чтобы оптимизировать процессы в горнодобывающей индустрии.
            Проверка проверка 123
          </p>
        </div>
      </div>

      <div class="row">
        <img
          src={project_banner}
          alt="banner"
          class="img-responsive fit-image"
        />
      </div>
    </div>
  );
};

export default About;
