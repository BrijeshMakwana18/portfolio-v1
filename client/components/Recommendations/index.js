import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "..";
import {
  Container,
  Header,
  Desc,
  LinksContainer,
  LinkItem,
  Footer,
} from "./styles";

const data = [
  {
    type: "mail",
    contact: "mailto:bamakwana2000@gmail.com",
  },
  {
    type: "linkedin",
    contact: "https://in.linkedin.com/in/brijesh-makwana-a876b116b",
  },
  {
    type: "twitter",
    contact: "https://twitter.com/BrijeshM2000",
  },
  {
    type: "phone",
    contact: "tel:+919033069192",
  },
];

export const Recommendations = ({ toggleTheme, theme, contactRef }) => {
  return (
    <Container ref={contactRef}>
      <Header>Contact</Header>
      <Desc>{"Hey There! Do you have something in mind? Let's Discuss."}</Desc>
      <LinksContainer>
        {data.map((item, index) => {
          return (
            <LinkItem href={item.contact} target="_blank" key={index}>
              {item.type === "mail" && <Icon.Mail />}
              {item.type === "phone" && <Icon.Phone />}
              {item.type === "linkedin" && <Icon.LinkedIn />}
              {item.type === "twitter" && <Icon.Twitter />}
            </LinkItem>
          );
        })}
      </LinksContainer>
      <Footer>{"Designed and Developed by\nBrijesh Makwana"}</Footer>
    </Container>
  );
};
