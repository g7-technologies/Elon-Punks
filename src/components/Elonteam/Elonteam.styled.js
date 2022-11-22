import styled from "styled-components";

const Wrapper = styled.div`
  .card {
    background: #1a1161;
    border-radius: 16px;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    height: 100%;
    .card-img-top {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
    }
    .card-body {
      .card-title {
        background: #1b0b52;
        padding: 5px;
        border-radius: 5px;
      }
    }
    .card-footer {
      border-radius: 50px;
    }
  }
  img {
    border-radius: 50%;
  }
  .social-media-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 30px;
      height: 30px;
      display: inline-block;
      :not(:first-child) {
        margin-left: 20px;
      }
    }
  }
`;

export default Wrapper;
