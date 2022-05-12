import React, { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../utils";
export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { light, dark } = theme;
  const toggleTheme = () => {
    theme == "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
  };
  return (
    <ThemeProvider theme={currentTheme === "light" ? light : dark}>
      <GlobalStyles />
      <Head>
        <title>Brijesh Makwanna</title>
      </Head>
    </ThemeProvider>
  );
}
