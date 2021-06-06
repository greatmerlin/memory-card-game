import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  MainSectionContainer,
  MainSectionBg,
  VideoBg,
  MainBtnWrapper,
  MainH1,
  MainP,
  MainSectionContent,
  ArrowForward,
  ArrowRight,
} from "./MainSectionElements";

const MainSection = () => {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };

  return (
    <MainSectionContainer>
      <MainSectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainSectionBg>
      <MainSectionContent>
        <MainH1>Improve your memory</MainH1>
        <MainP>
          MemoryUP is a great memory card game for people of every age. Turn
          over two cards at a time and try to remember which have the same
          symbol. Win coins as you win a game and lose coins if you make the
          wrong choice! You can keep playing the game as long as you still have
          some coins left!
        </MainP>
        <MainBtnWrapper>
          <Button
            to="/setplayername"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainSectionContent>
    </MainSectionContainer>
  );
};

export default MainSection;
