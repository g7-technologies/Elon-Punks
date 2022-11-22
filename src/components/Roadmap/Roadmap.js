import React from "react";
import Wrapper from "./Roadmap.styled";

// import images and icons
import RoadmapBackground from "../../images/roadmapbackground.svg";

function Roadmap() {
  return (
    <Wrapper>
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col text-center">
            <h2 className="display-4 fw-bold mb-5 mt-5">ROAD MAP</h2>
            <p className="mt-5">
              Elon Punks is a community driven collection of 10k randomly generated NFTs on the Ethereum blockchain.
              Our goal is to build the biggest group of degens in the Metaverse. For an accessible price of 0.04 ETH you
              receive 1 Elon Punk that provides you not only an awesome PFP and a lifelong bond with 10k other Elons, but a
              chance to win a NFT World, ticket to our metaverse events, P2E Games, Exclusive Merch,
              and a $WRLD buy back system to reward our holders . Oh, and all of this is only for Version 1.0 of our roadmap

            </p>
          </div>
        </div>
        <div className="row mt-5 flex-column roadmap">
          <div className="roadmap-background-img">
            <img src={RoadmapBackground} alt="roadmap" />
          </div>
          <div className="roadmap-all-cards">
            <div className="col roadmap-card roadmap-card-odd roadmap-card-first">
              <p className="card-text mt-5">
                1. All 10k Elon Punks mint and we commence the giveways.{" "}
              </p>
            </div>
            <div className="col roadmap-card roadmap-card-even">
              <p className="card-text card-text-2">
                2. Aquire Metaverse land for our space station where many exciting things will unfold. 
                (Community lounge, networking, Elonverse, P2E Games, etc)
              </p>
            </div>
            <div className="col roadmap-card roadmap-card-odd">
              <p className="card-text card-text-3">
                3. NFT World and $WRLD Allocations.
              </p>
            </div>
            <div className="col roadmap-card roadmap-card-even">
              <p className="card-text card-text-4 mt-5 mtop">4. Merch + Airdrop</p>
            </div>
            <div className="col roadmap-card roadmap-card-odd">
              <p className="card-text card-text-5 mb-5 mbottom">
                5. Airdrop holders their very own rocket ships.
              </p>
            </div>
            <div className="col roadmap-card roadmap-card-even mtop">
              <p className="card-text card-text-6 mt-5 mtop">
                6. Launch Spaceships to Mars.
              </p>
            </div>
            <div className="col roadmap-card roadmap-card-even roadmap-card-extra"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
