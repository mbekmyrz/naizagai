import React from "react";
import marat from "../images/marat.png";
import ilyas from "../images/ilyas.png";
import dora from "../images/dora.png";
import akzol from "../images/akzol.png";
import yassawe from "../images/yassawe.png";

const Team = () => {
  return (
    <div class="content-segment" id="team">
      <div class="row justify-content-center row-title">
        <h1 class="text-center">Наша команда</h1>
      </div>

      <div class="row justify-content-center">
        <div class="col-md-2 col-6">
          <img src={marat} alt="marat" class="img-responsive fit-image" />
        </div>

        <div class="col-md-2 col-6">
          <img src={ilyas} alt="ilyas" class="img-responsive fit-image" />
        </div>

        <div class="col-md-2 col-6">
          <img src={dora} alt="dora" class="img-responsive fit-image" />
        </div>

        <div class="col-md-2 col-6">
          <img src={akzol} alt="akzol" class="img-responsive fit-image" />
        </div>

        <div class="col-md-2 col-6">
          <img src={yassawe} alt="yassawe" class="img-responsive fit-image" />
        </div>
      </div>

      <div class="row justify-content-center text-center">
        <h5>
          Тиммейтам салам, конкурентам{" "}
          <span style={{ color: "red" }}>соболезную</span>
        </h5>
      </div>

      <div class="row justify-content-center text-center">
        <div class="col-12 col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum posuere urna nec tincidunt. Porttitor massa id neque
            aliquam vestibulum morbi blandit cursus risus. Semper feugiat nibh
            sed pulvinar proin. Gravida neque convallis a cras semper auctor
            neque vitae tempus. Elit sed vulputate mi sit amet mauris. Quam
            viverra orci sagittis eu volutpat. Quis risus sed vulputate odio ut
            enim blandit. Porttitor eget dolor morbi non arcu risus quis.
            Vulputate dignissim suspendisse in est. Eu consequat ac felis donec
            et. Ut placerat orci nulla pellentesque dignissim. Aliquam sem et
            tortor consequat. Justo laoreet sit amet cursus sit amet. Nulla
            facilisi nullam vehicula ipsum. Egestas dui id ornare arcu odio ut
            sem nulla. Sapien et ligula ullamcorper malesuada. Et netus et
            malesuada fames. Quis ipsum suspendisse ultrices gravida dictum
            fusce ut placerat orci. Magna etiam tempor orci eu lobortis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
