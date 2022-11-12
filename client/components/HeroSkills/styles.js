import styled from "styled-components";

export const SkillsContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 40vw;
  top: 16%;
  right: 4%;
  transform: rotate(0deg);
  /* background-color: green; */
  transition: transform 0.7s linear;
  animation: rotate 7s infinite linear;
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  @media only screen and (max-height: 700px) {
    display: none;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate {
  }
  .skills-charts {
    width: 100%;
    background-color: green;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  #myCanvasContainer {
    position: relative;
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  #myCanvas {
    margin: auto;
    width: 100%;
  }
`;

export const AvatarContainer = styled.div`
  .avatar {
    z-index: 10;
  }
  .react {
    width: 22%;
    height: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 1rem;
    transform: rotate(-4deg);
    background: green;
  }
  .git {
    background-color: green;
    width: 20%;
    height: 4px;
    position: absolute;
    top: 60%;
    left: 27%;
    transform: rotate(160deg);
    border-radius: 1rem;
  }
  .node {
    background-color: green;
    width: 14%;
    height: 4px;
    position: absolute;
    top: 20%;
    left: 45%;
    transform: rotate(120deg);
    border-radius: 1rem;
  }
  .js {
    background-color: green;
    width: 26%;
    height: 4px;
    position: absolute;
    top: 35%;
    left: 24%;
    transform: rotate(-140deg);
    border-radius: 1rem;
  }
  .mongo {
    background-color: green;
    width: 26%;
    height: 4px;
    position: absolute;
    bottom: 30%;
    right: 30%;
    transform: rotate(-140deg);
    border-radius: 1rem;
  }
`;

export const NodeImage = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  object-fit: contain;
  top: 0;
  right: 40%;
  -webkit-animation: spin 4s linear alternate infinite;
`;

export const GitImage = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  object-fit: contain;
  top: 60%;
  left: 20%;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
`;

export const ReactImage = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  object-fit: contain;
  top: 40%;
  right: 20%;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
`;

export const MongoImage = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  object-fit: contain;
  bottom: 4%;
  right: 25%;
  -webkit-animation: spin 4s ease-in-out alternate infinite;
`;

export const JSImage = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  object-fit: contain;
  top: 10%;
  left: 20%;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
`;
