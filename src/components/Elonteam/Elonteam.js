import React from "react";
import Wrapper from "./Elonteam.styled";

// import images and icons
import Team_Member1 from "../../images/team/team1.svg";
import Team_Member2 from "../../images/team/team2.svg";
import Team_Member3 from "../../images/team/team3.svg";

// import images and icons
import Discordicon from "../../images/icons/discord.svg";
import Twittericon from "../../images/icons/twitter.svg";
import Instagramicon from "../../images/icons/instagram.svg";

function Elonteam() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row mt-5">
          <div className="col text-center mt-5">
            <h2 className="display-4 fw-bold mt-5 mb-5">Elon Team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-img-top">
                <img src={Team_Member1} alt="team" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Nabiel Assita</h4>
                <h6 className="card-title">0xMuzz</h6>
                <p className="card-text">
                  2D/3D Artist residing in Boston MA striving to build the largest group of degen astronauts in the metaverse. Full time gaming enthusiast, NFT Degen, and successful business owner.
                </p>
              </div>
              <div className="card-footer">
                <div className="social-media-icons">
                  <a href="https://discord.gg/Muzz" target="blank">
                    <img src={Discordicon} alt="icons" />
                  </a>
                  <a href="https://twitter.com/0xMuzz" target="blank">
                    <img src={Twittericon} alt="icons" />
                  </a>
                  <a href="https://www.instagram.com/nab1el" target="blank">
                    <img src={Instagramicon} alt="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-img-top">
                <img src={Team_Member2} alt="team" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Will Venckus</h4>
                <h6 className="card-title">Swamp_eth</h6>
                <p className="card-text">
                  Lead Marketing specialist for Elon Punks based in Boston Ma, ensuring our departure to Mars. Video Game Streamer, NFT enthusiast and sports analyst.
                </p>
              </div>
              <div className="card-footer">
                <div className="social-media-icons">
                  <a href="https://discord.gg/Swamp#4489" target="blank">
                    <img src={Discordicon} alt="icons" />
                  </a>
                  <a href="https://twitter.com/Swamp_eth" target="blank">
                    <img src={Twittericon} alt="icons" />
                  </a>
                  <a href="https://www.instagram.com/williev23" target="blank">
                    <img src={Instagramicon} alt="icons" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card">
              <div className="card-img-top">
                <img src={Team_Member3} alt="team" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Adapt</h4>
                <h6 className="card-title">Aerospace Engineer</h6>
                <p className="card-text">
                  San Francisco Developer and DeFi enthusiast connecting the blockchain to real world applications.
                </p>
              </div>
              <div className="card-footer">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Elonteam;
