import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Poppins";
  src: url('/fonts/Poppins-Regular.woff') format('woff');
}
@font-face {
  font-family: "PoppinsMedium";
  src: url('/fonts/Poppins-Medium.woff') format('woff');
}
@font-face {
  font-family: "PoppinsBold";
  src: url('/fonts/Poppins-Bold.woff') format('woff');
}
  *{
    margin: 0px;
    padding:0px;
  }
  body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "PoppinsBold", sans-serif;
    margin: 0px;
    display: ${(props) => (props.hidden ? "none" : "block")};
    padding: 0 12vw 10vh 12vw;
    .navbar{
    margin-left: -12vw;
    padding: 0 12vw 0 12vw;
    }
    .brands-container{
    margin-left: -12vw;
    }
  }
  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  body{
    padding: 0 4vw 10vh 4vw;
    .navbar{
    margin-left: -4vw;
    padding: 0 4vw 0 4vw;
    }
    .brands-container{
    margin-left: -4vw;
    }
  }
} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  body{
    padding: 0 6vw 10vh 6vw;
    .navbar{
      margin-left: -6vw;
      padding: 0 6vw 0 6vw;

    }
    .brands-container{
      margin-left: -6vw;

    }
  }
} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  body{
    padding: 0 6vw 10vh 6vw;
    .navbar{
      margin-left: -6vw;

    padding: 0 6vw 0 6vw;
    }
    .brands-container{
      margin-left: -6vw;

    }
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  body{
    padding: 0 10vw 10vh 10vw;
    .navbar{
      margin-left: -10vw;
    padding: 0 10vw 0 10vw;
    }
    .brands-container{
      margin-left: -10vw;
    }
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  body{
    padding: 0 14vw 10vh 14vw;
    .navbar{
      margin-left: -14vw;
    padding: 0 14vw 0 14vw;
    }
    .brands-container{
      margin-left: -14vw;
    }
  }
}
`;

export default GlobalStyles;
