import styled from "styled-components";

import Suggestion from "./Suggestion";

export const Suggest = () => {

  const hate=document.querySelector(".hate_you")
  const Container = styled.div`
    // margin: 96px auto 80px;
    // background: blueviolet;
    position: absolute;
    width: 608px;
    height: min-content;
    left: 656px;
    top: 108px;
    box-sizing: border-box;
    border-radius: 4px;
    // border: 0.4px solid #8e8e8e;
    position: absolute;
    // background: #FFFFFF;
    /* Neutral/Secrets */
  `;
  const ContainerNested = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 0.4px solid #8e8e8e;

    position: absolute;
    width: 608px;
    height: fit-content;
    // top: 24px;
  `;
  const SuggestionsHeading = styled.h3`
    position: absolute;
    // width: 144px;
    height: 24px;
    left: 656px;
    top: 58px;

    /* Subtitles/Subtitle 1 */

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.15px;

    color: #000000;
  `;

  return (
    <div style={{ position: "relative" }}>
      <div className="hate_you"></div>
      {/* <Header /> */}
      <SuggestionsHeading>Suggestions For You</SuggestionsHeading>
      <Container>
        <ContainerNested>
          <Suggestion />
          {/* <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion /> */}
        </ContainerNested>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};
