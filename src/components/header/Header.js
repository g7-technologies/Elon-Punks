import React from "react";
import Wrapper from "./Header.styled";

// import images and icons
import Discordicon from "../../images/icons/discord.svg";
import Twittericon from "../../images/icons/twitter.svg";
import Instagramicon from "../../images/icons/instagram.svg";

function Header() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <h5 className="fs-3 fw-bold">ELON PUNKS</h5>
          </div>
          <div className="col">
            <div className="social-media-icons">
              <a href="https://discord.gg/elonpunksnft" target="blank">
                <img src={Discordicon} alt="icons" />
              </a>
              <a href="https://twitter.com/elonpunksnft" target="blank">
                <img src={Twittericon} alt="icons" />
              </a>
              <a href="https://www.instagram.com/elonpunks/" target="blank">
                <img src={Instagramicon} alt="icons" />
              </a>
              <a href="https://docs.google.com/document/d/1zdBEux5h3jQnszhSSIR0VF03FmrICqht_ueAf0adi5I/edit" target="blank">
                <p>Whitepaper</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
