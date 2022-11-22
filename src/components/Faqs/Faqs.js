import React from "react";
import Wrapper from "./Faqs.styled";

function Faqs() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <Wrapper>
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center mt-5">
            <h2 className="display-4 fw-bold mt-5 mb-5">FAQ’S</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>What is the total supply?</button>
              <div className="panel">
                <p>
                  A total of 10,000 unique Elon Punks will be created. Reveal of the NFTs will be after mint.
                </p>
              </div>
            </div>
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>When will Elon Punks launch?</button>
              <div className="panel">
                <p>
                  Our official mint date is March 30 for WL and March 31 for Public Sale.
                </p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">Why Elon Punks?</button>
              <div className="panel">
                <p>
                  Elon Punks is a community driven collection of 10k randomly generated NFTs on the Ethereum blockchain.
                  Our goal is to build the biggest group of degens in the Metaverse. For an accessible price of 0.04 ETH you
                  receive 1 Elon Punk that provides you not only an awesome PFP and a lifelong bond with 10k other Elons, but a
                  chance to win a NFT World, ticket to our metaverse events, P2E Games, Exclusive Merch,
                  and a $WRLD buy back system to reward our holders . Oh, and all of this is only for Version 1.0 of our roadmap.
                  Phase 1 of the roadmap is only the beginning, with a strong innovative team we believe we'll create a flourishing
                  community and project with a very innovative ecosystem.
                </p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">What are the after mint giveaways?</button>
              <div className="panel">
                <p>
                  If you mint an Elon Punk with a Black Space X cap you will be airdropped $5,000.
                  If you mint an Elon Punk with a Red hat you will be airdropped $10,000.
                  Only 10 Elon Punks have the black Space X trait and only 10 Elon Punks have the red Tesla hat trait. Only 20 lucky minters total will win a cash prize.
                  Minting the one of one Doge Dog, you'll have the choice of being airdropped a floor NFT World or the ETH equivalent to a floor NFT World.
                  There will be giveaways weekly and monthly for others that mint Elon Punks which include bluechip NFTS, ETH, and maybe some Teslas?

                </p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">How to obtain an Elon Punk?</button>
              <div className="panel">
                <p>
                  Our whitelist presale will begin for 0.02 ETH. You will have 24 hours to mint to avoid gas fees, to get on the presale list you must join the discord. 
                  <br/>Public launch will begin for 0.04 ETH.
                </p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">How to buy?</button>
              <div className="panel">
                <p>
                  Here are the steps on what you need to do to get your Elon Punks NFT.
                  <ol>
                    <li>Download the metamask.io extension on your browser.</li>
                    <li>Purchase Ethereum from various exchanges, such as Coinbase or Binance.</li>
                    <li>Send Ethereum from this exchange to your MetaMask wallet.</li>
                    <li>On launch day, open the Elon Punks website and select the number of NFTs you wish to mint.</li>
                    <li>Click “MINT” button, Metamask will popup asking for connection.</li>
                    <li>Confirm the transaction and any associated fees.</li>
                    <li>Once you have made your purchase, your NFTs will appear in your wallet and on OpenSea.</li>
                  </ol>  
                </p>
              </div>
            </div>
            <div className="accordion-container" onClick={handleAccordion}>
              <button className="accordion-item">What are my rights when I purchase an Elon Punk NFT?</button>
              <div className="panel">
                <p>
                  You own all the rights to the NFT you purchased, including the underlying art. For personal and commercial use.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Faqs;
