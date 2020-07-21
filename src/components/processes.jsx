import React from "react";
import flotation from "../images/flotation.png";
import grinding from "../images/grinding.png";

const Processes = () => {
  return (
    <div class="content-segment" id="process">
      <div class="row justify-content-center row-title">
        <h1 class="text-center">Процессы</h1>
      </div>
      <div class="row justify-content-center row-content">
        <div class="col-12 col-sm-4 col-md-3">
          <h3>Дробление</h3>
        </div>
        <br />
        <div class="col col-sm col-md">
          <h2>
            Дробление является самым энергозатратным процессом в индустрии
          </h2>
          <br />
          <p>
            Используя анализ изображений и установив камеру на конвейерной ленте
            мы можем рассчитывать распределение размеров входящих камней и
            оптимизировать работу дробилок, что приведет к огромной прибыли!
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <img
          src={grinding}
          alt="grinding"
          class="img-responsive fit-image rounded-circle img-process"
        />
      </div>

      <div class="row justify-content-center row-content">
        <div class="col-12 col-sm-4 col-md-3">
          <h3>Флотация</h3>
        </div>
        <br />
        <div class="col col-sm col-md">
          <h2>
            Флотация является основным методом разделения полезной руды от шлака
          </h2>
          <br />
          <p>
            Наблюдая за поверхностью флотационной пленки, мы можем научить
            алгоритм оптимизировать работу флотационной клетки!
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <img
          src={flotation}
          alt="flotation"
          class="img-responsive fit-image rounded-circle img-process"
        />
      </div>
    </div>
  );
};

export default Processes;
