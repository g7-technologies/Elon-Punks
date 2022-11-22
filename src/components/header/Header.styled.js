import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid #000aff;
  .social-media-icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a {
      width: 30px;
      height: 30px;
      display: inline-block;
      text-decoration:none;
      :not(:first-child) {
        margin-left: 20px;
      }
      p {
        font-size: 20px;
      }
    }
    a:hover {
      text-decoration: none;
      color: #ffffff; 
      cursor: pointer; 
    }
  }
`;

export default Wrapper;
