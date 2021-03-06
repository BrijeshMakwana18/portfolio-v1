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
  Contact,
} from "../components";
export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { light, dark } = theme;

  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const heroRef = useRef(null);
  const brandsRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const allRefs = {
    experience: experienceRef,
    work: workRef,
    education: experienceRef,
    contact: contactRef,
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
    sr?.reveal(educationRef.current, srConfig(300));
    sr?.reveal(contactRef.current, srConfig(300));
  }, []);

  return (
    <ThemeProvider theme={currentTheme === "light" ? light : dark}>
      <GlobalStyles />
      <Head>
        <title>Brijesh Makwanna</title>
      </Head>
      <Header headerRef={headerRef} allRefs={allRefs} />
      <Hero heroRef={heroRef} />
      <Brands brandsRef={brandsRef} />
      <Experience experienceRef={experienceRef} />
      <Education educationRef={educationRef} />
      <Work workRef={workRef} />
      <Contact contactRef={contactRef} />
    </ThemeProvider>
  );
}
