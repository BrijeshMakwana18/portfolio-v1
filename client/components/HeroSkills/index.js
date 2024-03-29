import Image from "next/image";
import { Icon } from "..";
import {
  SkillsContainer,
  ReactImage,
  NodeImage,
  JSImage,
  MongoImage,
  GitImage,
  AvatarContainer,
} from "./styles";
export default function HeroSkills({ heroSkillsRef }) {
  return (
    <SkillsContainer ref={heroSkillsRef}>
      {/* <AvatarContainer>
        <Image
          className="avatar"
          src={"/avatar.png"}
          height={200}
          width={400}
          objectFit="contain"
        />
        <div className="react"></div>
        <div className="git"></div>
        <div className="node"></div>
        <div className="mongo"></div>
        <div className="js"></div>
      </AvatarContainer>
      <ReactImage src="/react.png" />
      <GitImage src="/git.png" />
      <NodeImage src="/node.png" />
      <MongoImage src="/mongo.png" />
      <JSImage src="/js.png" /> */}
      <div class="skills-charts">
        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <ul>
              <li>
                <a
                  data-weight="25"
                  href="https://en.wikipedia.org/wiki/HTML"
                  target="_blank"
                >
                  HTML
                </a>
              </li>
              <li>
                <a
                  data-weight="25"
                  href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
                  target="_blank"
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  data-weight="25"
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                >
                  ES5/ES6
                </a>
              </li>
              <li>
                <a
                  data-weight="25"
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  target="_blank"
                >
                  TypeScript
                </a>
              </li>
              <li>
                <a
                  data-weight="24"
                  href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                  target="_blank"
                >
                  REST
                </a>
              </li>
              <li>
                <a
                  data-weight="14"
                  href="https://en.wikipedia.org/wiki/JSON"
                  target="_blank"
                >
                  JSON
                </a>
              </li>
              <li>
                <a
                  data-weight="13"
                  href="https://en.wikipedia.org/wiki/XML"
                  target="_blank"
                >
                  GSAP
                </a>
              </li>
              <li>
                <a
                  data-weight="14"
                  href="https://en.wikipedia.org/wiki/Data_science"
                  target="_blank"
                >
                  Data Science
                </a>
              </li>
              <li>
                <a
                  data-weight="26"
                  href="https://en.wikipedia.org/wiki/WordPress"
                  target="_blank"
                >
                  Wordpress
                </a>
              </li>
              <li>
                <a
                  data-weight="26"
                  href="https://en.wikipedia.org/wiki/PHP"
                  target="_blank"
                >
                  PHP
                </a>
              </li>
              <li>
                <a
                  data-weight="26"
                  href="https://en.wikipedia.org/wiki/Python_(programming_language)"
                  target="_blank"
                >
                  Python
                </a>
              </li>
              <li>
                <a
                  data-weight="21"
                  href="https://en.wikipedia.org/wiki/Node.js"
                  target="_blank"
                >
                  Node JS
                </a>
              </li>
              <li>
                <a
                  data-weight="17"
                  href="https://en.wikipedia.org/wiki/Git"
                  target="_blank"
                >
                  Git
                </a>
              </li>
              <li>
                <a data-weight="17" href="" target="_blank">
                  _lodash
                </a>
              </li>
              <li>
                <a
                  data-weight="23"
                  href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"
                  target="_blank"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <a
                  data-weight="15"
                  href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                  target="_blank"
                >
                  SASS
                </a>
              </li>
              <li>
                <a data-weight="24" href="https://reactjs.org/" target="_blank">
                  ReactJS
                </a>
              </li>
              <li>
                <a
                  data-weight="12"
                  href="https://en.wikipedia.org/wiki/JQuery"
                  target="_blank"
                >
                  jQuery
                </a>
              </li>
              <li>
                <a
                  data-weight="26"
                  href="http://mongoosejs.com/"
                  target="_blank"
                >
                  SQl
                </a>
              </li>
              <li>
                <a data-weight="19" href="http://gulpjs.com/" target="_blank">
                  Gulp
                </a>
              </li>
              <li>
                <a
                  data-weight="19"
                  href="https://www.npmjs.com/"
                  target="_blank"
                >
                  npm
                </a>
              </li>
              <li>
                <a
                  data-weight="19"
                  href="https://en.wikipedia.org/wiki/BEM"
                  target="_blank"
                >
                  BEM
                </a>
              </li>
            </ul>
          </canvas>
        </div>

        <div class="clear"></div>
      </div>
    </SkillsContainer>
  );
}
