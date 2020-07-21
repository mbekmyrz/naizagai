import React from "react";

const Video = () => {
  return (
    <div class="content-segment" id="video">
      <div class="row justify-content-center row-title">
        <h1 class="text-center">Наше видео:</h1>
      </div>
      <div class="row justify-content-center row-content">
        <div class="col-12 col-md-6 justify-content-center text-center">
          <div class="row justify-content-center text-center">
            <h5>Описание</h5>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-12 col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Fermentum posuere urna nec tincidunt. Porttitor massa id neque
                aliquam vestibulum morbi blandit cursus risus. Semper feugiat
                nibh sed pulvinar proin. Gravida neque convallis a cras semper
                auctor neque vitae tempus. Elit sed vulputate mi sit amet
                mauris. Quam viverra orci sagittis eu volutpat. Quis risus sed
                vulputate odio ut enim blandit. Porttitor eget dolor morbi non
                arcu risus quis.{" "}
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/S2rKJjy4YBk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
