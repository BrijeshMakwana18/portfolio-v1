import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Poppins";
  src: url('/fonts/Poppins-Regular.woff') format('woff');
}
@font-face {
  font-family: "PoppinsBold";
  src: url('/fonts/Poppins-Medium.woff') format('woff');
}
@font-face {
  font-family: "PoppinsMedium";
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
    padding:0px;
  }
`;

export default GlobalStyles;
