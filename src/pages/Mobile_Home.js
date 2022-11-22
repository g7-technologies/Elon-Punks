import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing components
import Header from "../components/header/Header";
import Card from "../components/Card/Card";
import Whyelonpunks from "../components/Whyelonpunks/Whyelonpunks";
import Roadmap from "../components/Roadmap/Roadmap";
import Elonteam from "../components/Elonteam/Elonteam";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";

// import images and icons
import Discordicon from "../images/icons/discord.svg";
import Moonimg from "../images/moon.svg";
import Staricon from "../images/Star.svg";
import Rocketimg from "../images/rocket.svg";
import Manwitharrows from "../images/manwitharrows.svg";


function Mobile_Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xfc72cD27655dd9D0E9bd233b8BD31d8aC6d24091",
    SCAN_LINK: "https://etherscan.io/address/0xfc72cD27655dd9D0E9bd233b8BD31d8aC6d24091",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "Eth",
      ID: 1,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 10000,
    WEI_COST: 20000000000000000,
    DISPLAY_COST: 0.02,
    GAS_LIMIT: 205000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
// counter function
const [ counter, setCounter ] = useState(1)
function decrementCounter () {
    if(counter <= 1) {
        setCounter(1);
    }else {
        setCounter(counter - 1);
    }
}

  return (
    <div>
      <Header />
      {/*banner section start*/}
      <div className="container banner">
        <div className="row banner-row">
          <div className="col-lg-6 d-flex align-items-end banner-text-section">
            <div>
              <h1>Elon Punks</h1>
              <p className="fs-4 my-4 fw-normal banner-text">
                Minting is Live
              </p>
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <p className="fs-4">
                    The sale has ended.
                  </p>
                  <p className="fs-4">
                      You can still find {CONFIG.NFT_NAME} on
                  </p>
                  <div className="d-flex banner-counter-button">
                    <div>
                      <button className="simple-button " target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                        {CONFIG.MARKETPLACE}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="fs-6">
                    1  {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}. Excluding gas fees.
                  </p>
                  <p className="fs-6"></p>
                    {blockchain.account === "" || blockchain.smartContract === null ? (
                      <div style={{ alignItems: "center", width: "100%" }}>
                        <div className="d-flex banner-counter-button">
                          <div>
                              <button className="simple-button" onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(connect());
                                  getData();
                                }}>
                                Connect
                              </button>
                          </div>
                        </div>
                        <p className="fs-6 mt-2">
                            Connect to the {CONFIG.NETWORK.NAME} network
                        </p>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <p className="fs-6">
                              {blockchain.errorMsg}
                            </p>
                          </>
                        ) : null}
                      </div>
                    ) : (  
                      <>
                        <p className="fs-4">
                          NFTs Minted :  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                        </p>
                        <div className="d-flex banner-counter-button">
                          <div className="banner-counter">
                            <button className="subtractOne" onClick={decrementMintAmount}> - </button>
                            <input type="number" className="inputField" min="1" step="1" id="nft_amount" readOnly value={mintAmount} onChange={(e) => { setCounter(e.target.value) }} />
                            <button className="addOne" onClick={incrementMintAmount}>+</button>
                          </div>
                          <div className="mx-sm-5">
                            <button className="simple-button" onClick={(e) => {
                                e.preventDefault();
                                claimNFTs();
                                getData();
                              }}>{claimingNft ? "Minting In Process" : "Mint Now"}
                            </button>
                          </div>
                        </div>
                        <p className="fs-6 mt-2">
                          {feedback}
                        </p>
                      </>
                    )
                  }
                </>
              )}
              <div className="d-flex styled-button-container">
                <a href="https://discord.gg/elonpunksnft" target="blank" className="styled-button">
                  <img src={Discordicon} alt="icon" />
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center ">
            <div className="banner-img-container">
              <img src={Moonimg} alt="banner" />
              <img className="star-icon star1" src={Staricon} alt="icon" />
              <img className="star-icon star2" src={Staricon} alt="icon" />
              <img className="star-icon star3" src={Staricon} alt="icon" />
              <img className="star-icon star4" src={Staricon} alt="icon" />
              <img className="star-icon star5" src={Staricon} alt="icon" />
              <img className="star-icon star6" src={Staricon} alt="icon" />
              <img className="star-icon star7" src={Staricon} alt="icon" />
              <img className="star-icon star8" src={Staricon} alt="icon" />
              <img
                className="star-icon banner-rocketimg"
                src={Rocketimg}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
      {/*banner section end*/}
      {/*who are elon punks section start*/}
      <div className="container py-5">
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="display-6 mb-3 fw-bold">WHO ARE ELON PUNKS ?</h2>
            <p className="fs-5">
              Elon Punks are a diverse group of 10,000 individuals
              that crash landed on the Ethereum Blockchain and begin their journey back to Mars! With our play
              to earn games you can play for $WRLD in various worlds.
              <br/>Our official mint date is March 30 for WL and March 31 for Public Sale.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="text-center man-with-arrows">
              <img className="w-51" src={Manwitharrows} alt="manwith arrow" />
            </div>
          </div>
        </div>
      </div>
      {/*who are elon punks section end*/}
      <Card />
      <Whyelonpunks />
      <Roadmap />
      <Elonteam />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Mobile_Home;