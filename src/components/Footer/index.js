import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  DevelopersDiv,
  SocialLogo,
  DevelopedBy,
  Developer,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper></FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              MemoryUP
            </SocialLogo>
            <WebsiteRights>
              Fern Fachhochschule Schweiz ® {new Date().getFullYear()} All
              rights reserved.
            </WebsiteRights>
            <DevelopersDiv>
              <DevelopedBy>developed by:</DevelopedBy>
              <Developer>Theologos Baxevanos</Developer>
            </DevelopersDiv>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
