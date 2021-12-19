import styled from "styled-components";
import StatusItem from "./StatusItem";
import { Post } from "./Post";
import SuggestionBox from "./SuggestionBox";

const HomepageDiv = styled.div`
  display: flex;
  position: absolute;
  width: 608px;
  height: 128px;
  left: 496px;
  top: 128px;
  background: #ffffff;
  border: 0.4px solid #8e8e8e;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0 12px;
`;

const GettingStartedHeading = styled.p`
  position: absolute;
  //   width: 100px;
  height: 16px;
  left: 496px;
  top: 288px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: #000000;
`;
const GettingStartedBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;

  position: absolute;
  width: 224px;
  height: 184px;
  left: 496px;
  top: 320px;
  margin: 16px 0;
  background: #ffffff;
  /* Neutral/Secrets */

  border: 0.4px solid #8e8e8e;
  border-radius: 4px;
`;
const GettingStartedBanner2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;

  position: absolute;
  width: 224px;
  height: 184px;
  left: 816px;
  top: 320px;
  margin: 16px 0;
  background: #ffffff;
  /* Neutral/Secrets */

  border: 0.4px solid #8e8e8e;
  border-radius: 4px;
`;

const LearnMore = styled.p`
  position: absolute;
  //   width: 73px;
  height: 16px;
  left: 1031px;
  top: 560px;
  margin: 16px 0 0 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  letter-spacing: 0.5px;

  /* Primary/After Hours */

  color: #0095f6;
`;

const Homepage = () => {
  return (
    <div>
      <HomepageDiv>
        <StatusItem />
        <StatusItem />
        <StatusItem />
      </HomepageDiv>

      <GettingStartedHeading>Getting Started</GettingStartedHeading>
      <GettingStartedBanner>Hi</GettingStartedBanner>
      <GettingStartedBanner2>Hi</GettingStartedBanner2>
      <LearnMore>Learn More</LearnMore>

      <div style={{ position: "absolute", top: "608px", left: "496px" }}>
        <Post />
        <Post />
        <Post />
      </div>
      <SuggestionBox />
    </div>
  );
};

export default Homepage;
