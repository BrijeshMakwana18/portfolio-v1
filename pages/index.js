import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme, sr, srConfig } from "../utils";
import {
  Header,
  Hero,
  Brands,
  Experience,
  Work,
  Education,
} from "../components";
import Calculator from "../components/Calculator";
import data from "../config.json";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { light, dark } = theme;

  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const heroRef = useRef(null);
  const brandsRef = useRef(null);
  const workRef = useRef(null);
  const eduRef = useRef(null);
  const allRefs = {
    experience: experienceRef,
    work: workRef,
    education: eduRef,
  };
  const toggleTheme = () => {
    theme == "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
  };

  useEffect(() => {
    // let exp = document.getElementById(experienceRef);
    // console.log(exp);
    sr?.reveal(headerRef.current, srConfig(100));
    sr?.reveal(heroRef.current, srConfig(200));
    sr?.reveal(brandsRef.current, srConfig(300));
    sr?.reveal(experienceRef.current, srConfig(200));
    sr?.reveal(workRef.current, srConfig(300));
    sr?.reveal(eduRef.current, srConfig(400));
  }, []);

  return (
    <ThemeProvider theme={currentTheme === "light" ? light : dark}>
      <GlobalStyles />
      <Head>
        <title>Brijesh Makwanna</title>
      </Head>
      <Header headerRef={headerRef} allRefs={allRefs} />
      {/* <Hero heroRef={heroRef} /> */}
      {/* <Brands brandsRef={brandsRef} /> */}
      <Experience
        header="Experience"
        data={data.exp}
        experienceRef={experienceRef}
      />
      {/* <Work workRef={workRef} /> */}
      {/* <Education eduRef={eduRef} /> */}
      <Calculator />
    </ThemeProvider>
  );
}
