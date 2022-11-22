import React from "react";
import Wrapper from "./Card.styled";

// importing images and icons
import elons from "../../images/traits/elons.svg";
import tesla_hats from "../../images/traits/tesla_hats.svg";
import space_x_hats from "../../images/traits/space_x_hats.svg";
import space_doge from "../../images/traits/space_doge.svg";

function Card() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="my-card text-center">
              <div className="card-head">
                <h5 className="fs-2 fw-bold ">Elons</h5>
              </div>
              <div className="card-img">
                <img src={elons} alt="icon" />
              </div>
              <div className="card-foot pt-5">
                <button className="btn btn-light px-4 fw-bold rounded-pill">
                  QTY : 9979
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="my-card text-center">
              <div className="card-head">
                <h5 className="fs-2 fw-bold ">Tesla Hats</h5>
              </div>
              <div className="card-img">
                <img src={tesla_hats} alt="icon" />
              </div>
              <div className="card-foot pt-5">
                <button className="btn btn-light px-4 fw-bold rounded-pill">
                  QTY : 10
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="my-card text-center">
              <div className="card-head">
                <h5 className="fs-2 fw-bold ">Space X Hat</h5>
              </div>
              <div className="card-img">
                <img src={space_x_hats} alt="icon" />
              </div>
              <div className="card-foot pt-5">
                <button className="btn btn-light px-4 fw-bold rounded-pill">
                  QTY : 10
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="my-card text-center">
              <div className="card-head">
                <h5 className="fs-2 fw-bold ">Space Doge</h5>
              </div>
              <div className="card-img">
                <img src={space_doge} alt="icon" />
              </div>
              <div className="card-foot pt-5">
                <button className="btn btn-light px-4 fw-bold rounded-pill">
                  QTY : 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Card;
