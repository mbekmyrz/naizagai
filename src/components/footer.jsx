import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container" id="contacts">
        <div class="row">
          <p>
            По всем вопросам обращаться к
            <a href="mailto:marat.bekmyrza@nu.edu.kz"> Marat Bekmyrza</a>
          </p>
        </div>
        <div class="row">
          <p>
            По вопросам торгового сотрудничества обращаться к
            <a href="mailto:darkhan.baizhan@nu.edu.kz"> Darkhan Baizhan</a>
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <p>© Copyright NaizagAI 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
