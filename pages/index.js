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
  const [hidden, setHidden] = useState(true);
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
    setHidden(false);
    sr?.reveal(headerRef.current, srConfig(1000));
    sr?.reveal(heroRef.current, srConfig(2000));
    sr?.reveal(brandsRef.current, srConfig(3000));
    sr?.reveal(experienceRef.current, srConfig(400));
    sr?.reveal(workRef.current, srConfig(400));
    sr?.reveal(educationRef.current, srConfig(400));
    sr?.reveal(contactRef.current, srConfig(400));
  }, []);

  return (
    <ThemeProvider theme={currentTheme === "light" ? light : dark}>
      <GlobalStyles hidden={hidden} />
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
