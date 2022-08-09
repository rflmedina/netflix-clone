import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  margin: 37px 0 0 -25px;
  width: 150px;
  height: 150px;

  &:after {
  content: "";
  background-image: url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png);
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  position: absolute;
  margin: -6px;
  width: inherit;
  height: inherit;
  animation: nfLoader-spin 1.1s linear infinite,1!important;
  -webkit-animation: nfLoader-spin 1.1s linear infinite,1!important; 
}

@keyframes nfLoader-spin {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes nfLoader-spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
`