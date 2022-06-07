import styled from "styled-components";

export const StyledImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  content: url('/images/image-hero-desktop.png');
  @media only screen and (max-width: 850px) {
      content: url('/images/image-hero-mobile.png');
    order: -1;
  }
`;

export const LogoImg = styled.img`
  height: auto;
  width: 100%;
`;

export const HeightLogoImg = styled.img`
  height: 100%;
  width: auto;
`;

export const DropdownIcon = styled.img`
  transition: 200ms ease-in-out;
`;
