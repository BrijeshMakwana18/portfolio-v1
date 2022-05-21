import Image from "next/image";
import { Container, BrandsTitle, BrandsContainer } from "./styles";

const vs = require("../../public/vs.png");
const hm = require("../../public/hm.png");
const db = require("../../public/db.png");
const boots = require("../../public/boots.png");
const brands = [vs, hm, db, boots];

export default function Brands({ brandsRef }) {
  return (
    <Container className="brands-container" ref={brandsRef}>
      <BrandsTitle className="aaaa">
        Brands that I've worked with at{" "}
        <a
          href="https://www.alshaya.com/en/"
          target={"_blank"}
          rel="noreferrer"
        >
          Alshaya Group
        </a>
      </BrandsTitle>
      <BrandsContainer>
        {brands.map((item, index) => {
          return (
            <Image
              height={"400px"}
              width={"1000px"}
              objectFit="contain"
              key={index}
              src={item}
              alt="brand"
            />
          );
        })}
      </BrandsContainer>
    </Container>
  );
}
