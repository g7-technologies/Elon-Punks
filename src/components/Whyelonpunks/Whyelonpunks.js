import React from "react";
import Wrapper from "./Whyelonpunks.styled";

// import images and icons
import Massiveimg from "../../images/massive.svg";
import Exclusiveimg from "../../images/exclusive.svg";
import Elonimg from "../../images/elon.svg";
import Spaceimg from "../../images/space.svg";

function Whyelonpunks() {
  return (
    <Wrapper>
      <div className="container mt-5">
        <div className="row my-5">
          <div className="col text-center mt-5">
            <h2 className="display-4 fw-bold mt-5 mb-5">WHY ELON PUNKS?</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="punks-my-card text-center">
              <div className="punks-card-img">
                <img src={Massiveimg} alt="icon" />
              </div>
              <p className="pt-3 fs-5 fw-bold">
                MASSIVE <br /> GIVEAWAYS
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="punks-my-card text-center">
              <div className="punks-card-img">
                <img src={Exclusiveimg} alt="icon" />
              </div>
              <p className=" pt-3 fs-5 fw-bold">
                EXCLUSIVE <br /> MERCH
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="punks-my-card text-center">
              <div className="punks-card-img">
                <img src={Elonimg} alt="icon" />
              </div>
              <p className="pt-3 fs-5 fw-bold">
                ELON <br /> VERSE
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="punks-my-card text-center">
              <div className="punks-card-img">
                <img src={Spaceimg} alt="icon" />
              </div>
              <p className="pt-3 fs-5 fw-bold">
                P2E <br /> GAMES
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Whyelonpunks;
