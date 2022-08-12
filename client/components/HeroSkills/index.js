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
      <AvatarContainer>
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
      <JSImage src="/js.png" />
    </SkillsContainer>
  );
}
