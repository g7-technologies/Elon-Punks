import styled from "styled-components";

const Wrapper = styled.div`
  .accordion-container {
    :not(:last-child) {
      border-bottom: 1px solid #3906ea;
    }
    .accordion-item {
      background-color: transparent;
      color: #fff;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 24px;
      transition: 0.4s;
      position: relative;
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        background: url("https://api.iconify.design/akar-icons/plus.svg?color=white")
          no-repeat center center / contain;
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        background: url("https://api.iconify.design/akar-icons/arrow-up.svg?color=white")
          no-repeat center center / contain;
      }
    }
    .panel {
      padding: 0 18px;
      background-color: transparent;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
    }
  }
`;

export default Wrapper;
