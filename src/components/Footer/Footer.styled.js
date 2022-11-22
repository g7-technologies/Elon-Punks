import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
  background: #1a0262;
  margin-top: 50px;
  .social-media-icons {
    display: flex;
    justify-content: flex-end;
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
