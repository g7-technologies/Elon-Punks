import styled from "styled-components";
// import images and icons
// import RoadmapBackground from "../../images/roadmapbackground.svg";

const Wrapper = styled.div`
  .roadmap {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    

    .roadmap-background-img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      @media (max-width: 992px) {
        height: 700px;
        opacity:0.2;
      }
    }
    .roadmap-all-cards {
      display: flex;
      flex-direction: column;
      @media (max-width: 992px) {
      }
    }
    .roadmap-card {
      width: 50%;
      padding: 0 50px;
      font-size: 23px;
      @media (max-width: 992px) {
        width: 100%;
        :not(:first-child) {
          margin-top: 20px;
        }
      }
      @media (max-width: 768px) {
        padding: 0 10px;
      }
      .card-text {
        margin-top: 5px;
      }
      .card-text-5 {
        margin-top: 90px;
        @media (max-width: 992px) {
          margin-top: 0px;
        }
      }
      .card-text-6 {
        transform: translate(80px, -80px);
        @media (max-width: 992px) {
          transform: translate(0, 0);
        }
      }
      .road-map-card-img {
        text-align: center;
        @media (max-width: 768px) {
          text-align: left;
        }
        img {
          width: 150px;
        }
      }
    }
    .roadmap-card-extra {
      min-height: 400px;
      @media (max-width: 1200px) {
        min-height: 200px;
      }
      @media (max-width: 992px) {
        min-height: 0px;
      }
    }
    .roadmap-card-odd {
    }
    .roadmap-card-even {
      align-self: flex-end;
      text-align: right;
      @media (max-width: 992px) {
        align-self: flex-start;
        text-align: left;
      }
    }
  }

  @media (max-width: 992px) {
    .mtop {
      margin-top: 10px !important;
    }

    .mbottom {
      margin-bottom: 0px !important;
    }

    .roadmap-background-img {
      top: -20%;
    }
  }
`;

export default Wrapper;
