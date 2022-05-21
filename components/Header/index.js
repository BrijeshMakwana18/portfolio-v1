import React, { useEffect } from "react";
import { Icon } from "..";
import {
  Container,
  LogoContainer,
  ThemeToggle,
  NavItemContainer,
  NavItem,
} from "./styles";
let menus = ["Experience", "Work", "Education", "Contact"];
export default function Header({ toggleTheme, theme, headerRef, allRefs }) {
  const onItemPress = (item) => {
    let id = allRefs[item.toLowerCase()];
    id.current.scrollIntoView();
  };
  return (
    <Container className="navbar" ref={headerRef}>
      <LogoContainer>Brijesh Makwana</LogoContainer>
      <NavItemContainer>
        {menus.map((item, index) => {
          return (
            <NavItem key={item} index={index} onClick={() => onItemPress(item)}>
              {item}
            </NavItem>
          );
        })}
      </NavItemContainer>
      <Icon.HamBurger />
    </Container>
  );
}
